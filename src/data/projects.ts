export interface Project {
    title: string
    url: string
    github: string
    desc: string
    icon: string
    tag: string
}

export const projects: Project[] = [
    {
        title: 'ThinkFlow',
        url: 'https://thinkflow-ai.lz-t.top/',
        github: 'https://github.com/liu-ziting/ThinkFlowAI',
        desc: 'ThinkFlow AI 是一款基于 Vue 3 和 VueFlow 构建的次世代、本地优先（Local-first）AI 驱动思维导图工具。它不仅仅是一个绘图软件，更是一个能够与你共同思考的“脑力增幅器”。',
        icon: '🧠',
        tag: 'Vision'
    },
    {
        title: '一饭封神',
        url: 'https://eat.lz-t.top/',
        github: 'https://github.com/liu-ziting/what-to-eat',
        desc: '基于AI的智能菜谱生成平台，提供营养分析、酒水推荐、菜谱效果图生成等全方位烹饪指导。',
        icon: '🍜',
        tag: 'Life'
    },
    {
        title: '工资银两换算器',
        url: 'https://silver.lz-t.top/',
        github: 'https://github.com/liu-ziting/SilverEra',
        desc: '一款融合了历史经济学与人工智能技术的“工资-购买力”换算工具。它不仅能将你的现代月薪折算为中国历代（汉、唐、宋、明、清）的白银两数，更能通过MiMo-V2-Flash大模型，深度解析你在特定朝代的社会地位、职业匹配及生活水平。',
        icon: '💰',
        tag: 'Life'
    },
    {
        title: 'GitHub 2025年度总结',
        url: 'https://github2025.lz-t.top/',
        github: 'https://github.com/liu-ziting/github-year-in-code',
        desc: '深度解析你的 GitHub 仓库与技术栈，接入 MiMo AI 大模型，生成专属开发者数字名片',
        icon: '📊',
        tag: 'Analytics'
    },
    {
        title: '宠物情绪识别拍立得',
        url: 'https://ai-instant-camera.lz-t.top/',
        github: 'https://github.com/liu-ziting/ai-instant-camera',
        desc: '宠物情绪识别并生成复古拍立得风格照片。',
        icon: '📸',
        tag: 'Vision'
    },
    {
        title: 'AI 穿搭锐评',
        url: 'https://ootd.lz-t.top/',
        github: 'https://github.com/liu-ziting/ootd-judge',
        desc: '上传OOTD，获取AI的毒舌或专业穿搭建议。',
        icon: '👗',
        tag: 'Fashion'
    },
    {
        title: '复古 Bot',
        url: 'https://bot.lz-t.top/',
        github: 'https://github.com/liu-ziting/retro-ai',
        desc: '怀旧风格聊天机器人，独特的交互体验。',
        icon: '👾',
        tag: 'Chatbot'
    },
    {
        title: 'AI 宠物写真',
        url: 'https://pet-ai-portrait.lz-t.top/',
        github: 'https://github.com/liu-ziting/pet-ai-portrait',
        desc: '生成高质量宠物摄影提示词。',
        icon: '🐾',
        tag: 'AIGC'
    },
    {
        title: '小红书解析与AI分析投流',
        url: 'https://xhs.lz-t.top/',
        github: 'https://github.com/liu-ziting/xhs-parser',
        desc: '小红书解析+智谱AI投流分析，数据驱动内容创作。',
        icon: '📊',
        tag: 'Analytics'
    },
    {
        title: 'Image To Prompt',
        url: 'https://prompt.lz-t.top/',
        github: 'https://github.com/liu-ziting/image-to-prompt',
        desc: '反推图片提示词，辅助Midjourney/SD创作。',
        icon: '🖼️',
        tag: 'Vision'
    },
    {
        title: 'Prompt Generator',
        url: 'https://text-prompt.netlify.app/',
        github: 'https://github.com/liu-ziting/text-prompt',
        desc: 'AI Prompt Generator 提示词结构化优化工具。',
        icon: '✨',
        tag: 'Tool'
    },
    {
        title: '通用AI对话/AI识图/生图',
        url: 'https://ai.lz-t.top/',
        github: 'https://github.com/liu-ziting/DeepSeekChat',
        desc: '集成通用AI对话、AI识图与生图的综合平台。',
        icon: '🤖',
        tag: 'All-in-One'
    }
]
