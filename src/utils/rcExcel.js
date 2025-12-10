/**
 * @author Charles Ran 
 * @since 2021.09.10
 * @version 1.0  
 * @function JSON 格式数据导出为Excel文件(支持多个Sheet页导出)
 */
var rcExcel = function () {
  return {

    ExportToExcel: function (options) {

      var loopSheet = undefined;
      var suffix = options.suffix ? options.suffix : '.xlsx';
      var fileName = options.fileName ? (options.fileName + suffix) : null;
      var type = options.type ? options.type : "application/octet-stream";

      var loopSheetTitles = "";
      var loopSheetData = "";

      var sheetName = "";

      var tmplWorkbookXML = `
        <?xml version="1.0"?>
        <?mso-application progid="Excel.Sheet"?>
        <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
          <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">
            <Author>Axel Richter</Author>
            <Created>{created}</Created>
          </DocumentProperties>
          <Styles>
            <Style ss:ID="def_titles">
              <Alignment ss:Horizontal="Center"ss:Vertical="Center"/>
              <Font ss:FontName="Arial Unicode MS"x:CharSet="134"ss:Size="10"ss:Color="#FFFFFF"ss:Bold="1"/>
              <Interior ss:Color="#43A038"ss:Pattern="Solid"/>
            </Style>
            <Style ss:ID="def_data">
              <Alignment ss:Horizontal="Center"ss:Vertical="Center"/>
              <Font ss:FontName="Arial Unicode MS"x:CharSet="134"ss:Size="10"ss:Color="#333333"/>
            </Style>
          </Styles>
          {worksheets}
        </Workbook>`,
        tmplWorksheetXML = '<Worksheet ss:Name="{nameWS}"><Table>{rows}</Table></Worksheet>',
        tmplCellXML = '<Cell{attributeStyleID}{attributeFormula}><Data ss:Type="{nameType}">{data}</Data></Cell>';

      var ctx = "";
      var workbookXML = "";
      var worksheetsXML = "";
      var rowsXML = "";

      if (typeof (fileName) != "string") { return };

      var dataValue = "";
      var dataType = "";
      var dataStyle = "";
      var dataFormula = "";

      for (var i = 0; i < options.sheets.length; i++) { //loop Sheet

        loopSheet = options.sheets[i];
        loopSheetTitles = loopSheet.titles;
        loopSheetData = loopSheet.data;

        sheetName = loopSheet.name ? loopSheet.name : this.defaultOptions.sheetName;

        if (loopSheetTitles && typeof (loopSheetTitles) != "object") { continue; };
        if (loopSheetData && typeof (loopSheetData) != "object") { continue; };

        //每一列的标题 开始
        rowsXML += '<Row>';
        for (var k = 0; k < loopSheetTitles.length; k++) {

          dataValue = loopSheetTitles[k];
          dataType = typeof dataValue;
          dataStyle = "def_titles";
          dataFormula = undefined;

          ctx = {
            attributeStyleID: ' ss:StyleID="' + dataStyle + '"',
            nameType: (dataType == 'Number' || dataType == 'DateTime' || dataType == 'Boolean' || dataType == 'Error') ? dataType : 'String',
            data: (dataFormula) ? '' : dataValue,
            attributeFormula: (dataFormula) ? ' ss:Formula="' + dataFormula + '"' : ''
          };
          rowsXML += this.format(tmplCellXML, ctx);
        }
        rowsXML += '</Row>';
        //每一列的标题 结束

        //数据
        for (var j = 0; j < loopSheet.data.length; j++) {

          rowsXML += '<Row>';

          for (var index in loopSheet.data[j]) {

            dataValue = loopSheet.data[j][index] === "." ? "" : loopSheet.data[j][index];
            dataType = typeof dataValue;
            dataStyle = "def_data";
            dataFormula = undefined;

            ctx = {
              attributeStyleID: ' ss:StyleID="' + dataStyle + '"',
              nameType: (dataType == 'Number' || dataType == 'DateTime' || dataType == 'Boolean' || dataType == 'Error') ? dataType : 'String',
              data: (dataFormula) ? '' : dataValue,
              attributeFormula: (dataFormula) ? ' ss:Formula="' + dataFormula + '"' : ''
            };
            rowsXML += this.format(tmplCellXML, ctx);
          }

          rowsXML += '</Row>';
        }
        ctx = { rows: rowsXML, nameWS: sheetName || 'Sheet' + i };
        worksheetsXML += this.format(tmplWorksheetXML, ctx);
        rowsXML = "";
      }

      ctx = { created: (new Date()).getTime(), worksheets: worksheetsXML };
      workbookXML = this.format(tmplWorkbookXML, ctx);

      this.saveAs(new Blob([workbookXML], { type }), fileName);

    },
    saveAs: function (blob, fileName) {
      var tmpa = document.createElement("a");
      tmpa.download = fileName ? fileName : new Date().getTime() + '.xlsx';
      tmpa.href = URL.createObjectURL(blob); //绑定a标签
      tmpa.click(); //模拟点击实现下载
      setTimeout(function () { //延时释放
        URL.revokeObjectURL(blob); //用URL.revokeObjectURL()来释放这个object URL
      }, 100);
    },
    ExportToCSV: function (options) {
      var suffix = options.suffix ? options.suffix : '.csv';
      var fileName = options.fileName ? (options.fileName + suffix) : null;
      var sheets = options.sheets[0];
      var showLabel = options.hasOwnProperty('showLabel') ? options.showLabel : true;
      var arrData = sheets.data;
      var labelArr = sheets.titles;
      var CSV = '';
      if (showLabel) {
        var row = "";
        for (var l = 0; l < labelArr.length; l++) {
          row += labelArr[l] + ',';
        }
        row = row.slice(0, -1);
        CSV += row + '\r\n';
      }
      for (var i = 0; i < arrData.length; i++) {
        var row = "";
        for (var index in arrData[i]) {
          var arrValue = arrData[i][index] == null ? "" : arrData[i][index];
          row += arrValue + ',';
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
      }
      if (CSV == '') {
        alert("Invalid data");
        return;
      }

      if (this.msieversion()) {
        var IEwindow = window.open();
        IEwindow.document.write('sep=,\r\n' + CSV);
        IEwindow.document.close();
        IEwindow.document.execCommand('SaveAs', true, fileName);
        IEwindow.close();
      } else {
        var uri = 'data:application/csv;charset=utf-8,' + encodeURIComponent(CSV);
        var link = document.createElement("a");
        link.href = uri;
        link.style = "visibility:hidden";
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    msieversion: function () {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { // If Internet Explorer, return version number 
        return true;
      } else { // If another browser, 
        return false;
      }
    },
    format: function (s, c) {
      return s.replace(/{(\w+)}/g, function (m, p) {
        return c[p];
      })
    },
    info: function () {
      return this.defaultOptions.plugin;
    },
    defaultOptions: {
      sheetName: "数据表",
      plugin: {
        author: "Wu",
        version: "1.0"
      }
    }
  }
}();

export default rcExcel;