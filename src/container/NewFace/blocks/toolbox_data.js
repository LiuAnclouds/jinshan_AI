export const TOOLBOX_CATEGORIES = [
    {
        id: 'camera',
        name: '视觉硬件',
        icon: '📷',
        color: '#4C97FF', // 蓝色系
        blocks: [
            { type: 'cv_start_camera' },
            { type: 'cv_show_image' }
        ]
    },
    {
        id: 'process',
        name: '图像处理',
        icon: '🎨',
        color: '#9966FF', // 紫色系
        blocks: [
            { type: 'cv_cvt_color' }
        ]
    },
    {
        id: 'ai',
        name: 'AI 智能',
        icon: '🧠',
        color: '#FF6680', // 红粉系
        blocks: [
            { type: 'cv_load_cascade' },
            { type: 'cv_detect_and_draw' }
        ]
    },
    {
        id: 'tools',
        name: '工具箱',
        icon: '🛠️',
        color: '#FFBF00', // 橙色系
        blocks: [
            { type: 'cv_log_info' },
            { type: 'text' },
            { type: 'math_number' },
            { type: 'controls_repeat_ext', defaults: { 'TIMES': 'math_number' } }, // 示例带默认值的复杂块
            { type: 'controls_if' }
        ]
    }
];

// 辅助函数：将配置转为 Blockly XML
export const getToolboxXML = (categoryId) => {
    const category = TOOLBOX_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return '<xml></xml>';

    let blocksXML = '';
    category.blocks.forEach(b => {
        if (b.type === 'controls_repeat_ext') {
            // 特殊处理循环块，给它塞一个数字块
            blocksXML += `
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>`;
        } else if (b.type === 'math_number') {
            blocksXML += `<block type="math_number"><field name="NUM">0</field></block>`;
        } else if (b.type === 'text') {
            blocksXML += `<block type="text"><field name="TEXT"></field></block>`;
        } else {
            blocksXML += `<block type="${b.type}"></block>`;
        }
    });

    return `<xml>${blocksXML}</xml>`;
};