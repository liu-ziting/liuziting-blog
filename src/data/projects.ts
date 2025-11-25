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
        title: '一饭封神',
        url: 'https://eat.lz-t.top/',
        github: 'https://github.com/liu-ziting/what-to-eat',
        desc: '基于AI的智能菜谱生成平台，提供营养分析、酒水推荐、菜谱效果图生成等全方位烹饪指导。',
        icon: '🍜',
        tag: 'Life'
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
        title: 'AI 情绪拍立得',
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
    }
]
