
import {CategoryColors} from '@/global/colors';

let toolbox = `
<category name="循环" colour="${CategoryColors.Loop}">
  <block type="mpython_sleep_ms">
    <value name="duration"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
  </block>
  <block type="controls_repeat_forever"></block>
  <block type="controls_repeat_ext">
    <value name="TIMES">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>
    </value>
  </block>
  <block type="controls_whileUntil"></block>
  <block type="controls_for">
    <value name="FROM">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="TO">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>
    </value>
    <value name="BY">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
  <block type="controls_forEach"></block>
  <block type="controls_flow_statements"></block>
</category>
<category name="逻辑" colour="${CategoryColors.Logic}">
  <block type="controls_if"></block>
  <block type="controls_if"><mutation else="1"></mutation></block>
  <block type="logic_compare">
      <value name="B"><block type="math_number"><field name="NUM">0</field></block></value>
  </block>
  <block type="logic_operation_2"></block>
  <block type="logic_negate"></block>
  <block type="logic_boolean"></block>
  <block type="logic_null"></block>
  <block type="logic_ternary"></block>
  <block type="mpython_return"></block>
  <block type="mpython_try_except"></block>
  <block type="mpython_try_except_finally"></block>
  <block type="mpython_type"></block>
  <block type="mpython_type_is"></block>
  <block type="mpython_eval"></block>
</category>
<category name="数学" colour="${CategoryColors.Math}">
  <block type="math_number" gap="32"></block>
  <block type="math_arithmetic">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
  <block type="math_single">
    <value name="NUM">
      <shadow type="math_number">
        <field name="NUM">9</field>
      </shadow>
    </value>
  </block>
  <block type="math_trig">
    <value name="NUM">
      <shadow type="math_angle">
        <field name="angle">45</field>
      </shadow>
    </value>
  </block>
  <!--block type="math_trig">
    <value name="NUM">
      <shadow type="math_number">
        <field name="NUM">45</field>
      </shadow>
    </value>
  </block-->
  <block type="math_constant"></block>
  <block type="math_number_property">
    <value name="NUMBER_TO_CHECK">
      <shadow type="math_number">
        <field name="NUM">0</field>
      </shadow>
    </value>
  </block>
  <block type="math_round">
    <value name="NUM">
      <shadow type="math_number">
        <field name="NUM">3.1</field>
      </shadow>
    </value>
  </block>
  <block type="math_keep_decimal">
    <value name="NUM">
      <shadow type="math_number">
        <field name="NUM">3.1415926</field>
      </shadow>
    </value>
    <value name="PLACE">
      <shadow type="math_number">
        <field name="NUM">2</field>
      </shadow>
    </value>
  </block>
  <block type="math_on_list"></block>
  <block type="mpython_list_index"></block>
  <block type="math_modulo">
    <value name="DIVIDEND">
      <shadow type="math_number">
        <field name="NUM">64</field>
      </shadow>
    </value>
    <value name="DIVISOR">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>
    </value>
  </block>
  <block type="math_division_consult">
    <value name="DIVIDEND">
      <shadow type="math_number">
        <field name="NUM">64</field>
      </shadow>
    </value>
    <value name="DIVISOR">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>
    </value>
  </block>
  <block type="math_constrain">
    <value name="VALUE">
      <shadow type="math_number">
        <field name="NUM">50</field>
      </shadow>
    </value>
    <value name="LOW">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="HIGH">
      <shadow type="math_number">
        <field name="NUM">100</field>
      </shadow>
    </value>
  </block>
  <block type="labplus_mapping">
    <value name="inputNum"><shadow type="math_number"><field name="NUM">10</field></shadow></value>
    <value name="bMin"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
      <value name="bMax"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
    <value name="cMin"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
    <value name="cMax"><shadow type="math_number"><field name="NUM">200</field></shadow></value>
  </block>
  <block type="math_random_int_time">
    <value name="FROM">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="TO">
      <shadow type="math_number">
        <field name="NUM">100</field>
      </shadow>
    </value>
  </block>
  <block type="math_random_randrange">
    <value name="start"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
    <value name="stop"><shadow type="math_number"><field name="NUM">10</field></shadow></value>
    <value name="step"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
  </block>
  <block type="math_random_float"></block>
  <block type="math_convert"></block>
  <block type="math_number_bits_ops">
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </block>
  <block type="bit_inversion">
    <value name="data"><shadow type="math_number"><field name="NUM">60</field></shadow></value>
  </block>
  <block type="mpython_ten_convert_to">
    <value name="int_num"><shadow type="math_number"><field name="NUM">10</field></shadow></value>
  </block>
  <block type="mpython_convert_to_ten">
    <value name="convert_str"><shadow type="text"><field name="TEXT">11</field></shadow></value>
  </block>
  <block type="mpython_ten_converted_to_bytes">
    <value name="convert_num"><shadow type="math_number"><field name="NUM">11</field></shadow></value>
  </block>
  <block type="mpython_int_to_chr">
    <value name="convert_num"><shadow type="math_number"><field name="NUM">97</field></shadow></value>
  </block>
  <block type="mpython_chr_to_int">
    <value name="convert_chr"><shadow type="text"><field name="TEXT">a</field></shadow></value>
  </block>
  <block type="mpython_str_to_hex">
    <value name="convert_chr"><shadow type="text"><field name="TEXT">abcdfg</field></shadow></value>
  </block>
  <block type="mpython_hex_to_bin_str">
    <value name="convert_chr"><shadow type="text"><field name="TEXT">313233</field></shadow></value>
  </block>
  <block type="mpython_data_to_base64">
    <value name="data"><shadow type="text"><field name="TEXT">mPython</field></shadow></value>
  </block>
  <block type="mpython_base64_to_data">
    <value name="data"><shadow type="text"><field name="TEXT">bXB5dGhvbg==</field></shadow></value>
  </block>
  <block type="mpython_convert_bytearray"><value name="arr"></value></block>
  <block type="number_to_bytes"></block>
  <block type="bytes_to_number"></block>
</category>
<category name="文本" colour="${CategoryColors.Text}">
  <block type="input_function"></block>
  <block type="text_print">
    <value name="TEXT">
      <shadow type="text">
        <field name="TEXT"></field>
      </shadow>
    </value>
  </block>
  <block type="text"><field name="TEXT"></field></block>
  <block type="line_break"></block>
  <block type="text_join"><mutation items="1"></mutation></block>
  <block type="text_join"></block>
  <block type="text_add"><mutation items="2"></mutation>
    <value name="ADD0">
      <block type="text">
        <field name="TEXT">string1</field>
      </block>
    </value>
    <value name="ADD1">
      <block type="text">
        <field name="TEXT">string2</field>
      </block>
    </value>
  </block>
  <block type="text_format">
    <value name="FORMAT">
      <shadow type="text"><field name="TEXT">Value: %.2f</field></shadow>
    </value>
    <value name="CONTENT">
      <block type="tuple_create_with_items_insert">
        <mutation items="1"></mutation>
        <value name="ADD0">
          <block type="math_number">
            <field name="NUM">3.1415926</field>
          </block>
        </value>
      </block>
    </value>
  </block>
  <block type="text_format2">
    <value name="FORMAT">
      <shadow type="text"><field name="TEXT">Value: {:.3}</field></shadow>
    </value>
    <value name="CONTENT">
      <block type="tuple_create_with_items_insert">
        <mutation items="1"></mutation>
        <value name="ADD0">
          <block type="math_number">
            <field name="NUM">3.1415926</field>
          </block>
        </value>
      </block>
    </value>
  </block>
  <block type="text_append_text">
    <value name="text_abc"><shadow type="text"><field name="TEXT">abc</field></shadow></value>
    <value name="append_text"><shadow type="text"><field name="TEXT">def</field></shadow></value>
  </block>
  <block type="text_is_number">
    <value name="TEXT">
      <shadow type="text">
        <field name="TEXT"></field>
      </shadow>
    </value>
  </block>
  <block type="text_length">
    <value name="VALUE">
      <shadow type="text">
        <field name="TEXT"></field>
      </shadow>
    </value>
  </block>
  <block type="text_isEmpty">
    <value name="VALUE">
      <shadow type="text">
        <field name="TEXT"></field>
      </shadow>
    </value>
  </block>
  <block type="text_indexOf">
    <value name="VALUE">
      <shadow type="text">
        <field name="TEXT">abc</field>
      </shadow>
    </value>
    <value name="FIND">
      <shadow type="text">
        <field name="TEXT">b</field>
      </shadow>
    </value>
  </block>
  <block type="text_charAt">
    <value name="VALUE">
      <shadow type="text">
        <field name="TEXT">abc</field>
      </shadow>
    </value>
  </block>
  <block type="text_getSubstring">
    <value name="STRING">
      <shadow type="text">
        <field name="TEXT">abc</field>
      </shadow>
    </value>
  </block>
  <block type="text_changeCase">
    <value name="TEXT">
      <shadow type="text">
        <field name="TEXT"></field>
      </shadow>
    </value>
  </block>
  <block type="text_trim">
    <value name="TEXT">
      <shadow type="text">
        <field name="TEXT"></field>
      </shadow>
    </value>
  </block>
  <block type="text_to_byte">
    <value name="TEXT">
      <shadow type="text">
        <field name="TEXT">abc</field>
      </shadow>
    </value>
  </block>
  <block type="mpython_bytes_decode">
    <value name="bytes_decode"></value>
  </block>
  <block type="mpython_ujson_dumps">
    <value name="data"><shadow type="text_dict"><field name="TEXT">"Age":8</field></shadow></value>
  </block>
  <block type="mpython_ujson_loads">
    <value name="data"><shadow type="text"><field name="TEXT">{"Age":8}</field></shadow></value>
  </block>
  <block type="mpython_split">
    <value name="data"><shadow type="text"><field name="TEXT"></field></shadow></value>
    <value name="split_data"><shadow type="text"><field name="TEXT"></field></shadow></value>
  </block>
  <!--block type="mpython_custom_code"></block-->
</category>
<category name="变量" colour="${CategoryColors.variable}" custom="VARIABLE"></category>
<sep></sep>
<category name="高级">
  <category name="函数" colour="${CategoryColors.Functions}" custom="PROCEDURE"></category>
  <category name="列表" colour="${CategoryColors.List}">
    <block type="lists_create_with"><mutation items="0"></mutation></block>
    <block type="lists_create_with"></block>
    <block type="text_list"><field name="TEXT">0, 0, 0</field></block>
    <!--block type="file_to_list">
      <value name="file_path"><shadow type="text"><field name="TEXT">1.txt</field></shadow></value>
    </block-->
    <block type="mpython_return_list">
      <value name="list_name"><block type="variables_get"><field name="VAR">my_list</field></block></value>
      <value name="list_items"><shadow type="text_list"><field name="TEXT">0, 0, 0</field></shadow></value>
    </block>
    <block type="list_order_item">
      <value name="list_name"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
      <value name="list_order_item"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
    </block>
    <block type="lists_append">
      <value name="list_name"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
    </block>
    <block type="list_item_exist">
      <value name="list_name"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
      <value name="list_item"><shadow type="text"><field name="TEXT">mPython</field></shadow></value>
    </block>
    <block type="lists_extend">
      <value name="list_name"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
      <value name="extend_list"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
    </block>
    <block type="lists_clear">
      <value name="list_name"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
    </block>
    <block type="lists_remove_repetition">
      <value name="list_name"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
    </block>
    <block type="lists_repeat">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">5</field>
        </shadow>
      </value>
    </block>
    <block type="lists_length"></block>
    <block type="lists_isEmpty"></block>
    <block type="list_first_index">
      <value name="elem"><shadow type="text"><field name="TEXT">mPython</field></shadow></value>
      <value name="my_list"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
    </block>
    <block type="set_list_order_item">
      <value name="list_name"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
      <value name="list_order_item"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
      <value name="set_value"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
    </block>
    <block type="insert_list_order_item">
      <value name="list_name"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
      <value name="list_order_item"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
      <value name="set_value"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
    </block>
    <block type="parts_of_list">
      <value name="list_name"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
      <value name="start_item"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
      <value name="end_item"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
    </block>
    <block type="lists_getIndex">
      <mutation statement="true" at="true"></mutation>
      <field name="MODE">REMOVE</field>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE">
        <shadow type="text_list"><field name="TEXT"></field></shadow>
      </value>
    </block>
    <block type="lists_getIndex">
      <mutation statement="false" at="true"></mutation>
      <field name="MODE">GET_REMOVE</field>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE">
        <shadow type="text_list"><field name="TEXT"></field></shadow>
      </value>
    </block>
    <block type="lists_split">
      <value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value>
    </block>
    <block type="lists_sort"></block>
  </category>
  <category name="元组" colour="${CategoryColors.Tuple}">
    <block type="tuple_create_with_items_insert"></block>
    <block type="text_tuple"><field name="TEXT">"mPython",</field></block>
    <block type="tuple_create_with">
      <value name="tuple_name"><block type="variables_get"><field name="VAR">my_tuple</field></block></value>
      <value name="tuple_items"><shadow type="text_tuple"><field name="TEXT">"mPython",</field></shadow></value>
    </block>
    <block type="tuple_order_item">
      <value name="tuple_name"><shadow type="text_tuple"><field name="TEXT"></field></shadow></value>
      <value name="tuple_order_item"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
    </block>
    <block type="tuple_min_max_len">
      <value name="tuple_name"><shadow type="text_tuple"><field name="TEXT"></field></shadow></value>
    </block>
    <block type="tuple_item_exist">
      <value name="tuple_name"><shadow type="text_tuple"><field name="TEXT"></field></shadow></value>
      <value name="tuple_item"><shadow type="text"><field name="TEXT">mPython</field></shadow></value>
    </block>
    <block type="parts_of_tuple">
      <value name="tuple_name"><shadow type="text_tuple"><field name="TEXT"></field></shadow></value>
      <value name="tuple_item"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
    </block>
    <block type="parts_of_tuple2">
      <value name="tuple_name"><shadow type="text_tuple"><field name="TEXT"></field></shadow></value>
      <value name="start_item"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
      <value name="end_item"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
    </block>
    <block type="list_to_tuple">
      <value name="list_name"><shadow type="text_list"><field name="TEXT"></field></shadow></value>
    </block>
  </category>
  <category name="集合" colour="${CategoryColors.Set}">
    <block type="set_create_with_items_insert"></block>
    <block type="text_set"><field name="TEXT">"string", 0.9, ("tuple",)</field></block>
    <block type="set_create_with">
      <value name="set_name"><block type="variables_get"><field name="VAR">my_set</field></block></value>
      <value name="set_items"><shadow type="text_set"></shadow></value>
    </block>
      <block type="sets_update_ways">
      <value name="set_name"><block type="variables_get"><field name="VAR">my_set</field></block></value>
      <value name="set_1_name"><shadow type="text_set"></shadow></value>
    </block>
    <block type="set_update_with">
      <value name="set_name"><shadow type="text_set"></shadow></value>
      <value name="set_items"></value>
    </block>
      <block type="set_subset_superset">
      <value name="set_name"><shadow type="text_set"></shadow></value>
      <value name="set_1_name"><shadow type="text_set"></shadow></value>
    </block>
      <block type="intersection_of_sets">
      <value name="set_name"><shadow type="text_set"></shadow></value>
      <value name="set_1_name"><shadow type="text_set"></shadow></value>
    </block>
      <block type="len_of_sets">
      <value name="set_name"><shadow type="text_set"></shadow></value>
    </block>
      <block type="get_sets_pop">
      <value name="set_name"><shadow type="text_set"></shadow></value>
    </block>
  </category>
  <category name="字典" colour="${CategoryColors.Dictionary}">
    <block type="dict_create_with_items_insert"></block>
    <block type="text_dict"><field name="TEXT">"Age":8</field></block>
    <block type="dict_create_with">
      <value name="dict_name"><block type="variables_get"><field name="VAR">my_dict</field></block></value>
      <value name="dict_items"><shadow type="text_dict"><field name="TEXT">"Age":8</field></shadow></value>
    </block>
    <block type="add_dict_key_value">
      <value name="dict_name"><shadow type="text_dict"><field name="TEXT"></field></shadow></value>
      <value name="dict_items"><shadow type="text"><field name="TEXT">Age</field></shadow></value>
      <value name="add_value"><shadow type="math_number"><field name="NUM">10</field></shadow></value>
    </block>
    <block type="dict_key_value">
      <value name="dict_name"><shadow type="text_dict"><field name="TEXT"></field></shadow></value>
      <value name="dict_items"><shadow type="text"><field name="TEXT">Age</field></shadow></value>
    </block>
    <block type="dict_length">
      <value name="dict_name"><shadow type="text_dict"><field name="TEXT"></field></shadow></value>
    </block>
    <block type="dict_key_exist">
      <value name="dict_name"><shadow type="text_dict"><field name="TEXT"></field></shadow></value>
      <value name="dict_items"><shadow type="text"><field name="TEXT">Age</field></shadow></value>
    </block>
    <block type="dict_key_or_val_list">
      <value name="dict_name"><shadow type="text_dict"><field name="TEXT"></field></shadow></value>
    </block>
  </category>
</category>
`;
export default toolbox;
