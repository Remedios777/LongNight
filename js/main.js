document.addEventListener('DOMContentLoaded', function() {
    
    // 世界观页面 - 时间线卡片展开/折叠
    const timelineCards = document.querySelectorAll('.timeline-card');
    timelineCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
    
    // 角色档案页面 - 角色切换
    const characterButtons = document.querySelectorAll('.character-button');
    const characterProfiles = document.querySelectorAll('.character-profile');
    
    characterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetCharacter = this.getAttribute('data-character');
            
            // 更新按钮状态
            characterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 更新角色档案显示
            characterProfiles.forEach(profile => {
                if (profile.getAttribute('data-character') === targetCharacter) {
                    profile.classList.add('active');
                } else {
                    profile.classList.remove('active');
                }
            });
        });
    });
    
    // 角色语录滑块
    const quoteSliders = document.querySelectorAll('.quote-slider');
    quoteSliders.forEach(slider => {
        const quotes = slider.querySelectorAll('.quote');
        const dots = slider.querySelectorAll('.quote-dot');
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                // 更新点状态
                dots.forEach(d => d.classList.remove('active'));
                this.classList.add('active');
                
                // 更新语录显示
                quotes.forEach(q => q.classList.remove('active'));
                quotes[index].classList.add('active');
            });
        });
    });
    
    // if线页面和paro页面 - 模态框
    const ifCards = document.querySelectorAll('.if-card');
    const paroCards = document.querySelectorAll('.paro-card');
    const ifModals = document.querySelectorAll('.if-modal');
    const paroModals = document.querySelectorAll('.paro-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // if线卡片点击事件
    ifCards.forEach(card => {
        card.addEventListener('click', function() {
            const targetModal = document.getElementById(this.getAttribute('data-target'));
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            }
        });
    });
    
    // paro卡片点击事件
    paroCards.forEach(card => {
        card.addEventListener('click', function() {
            const targetModal = document.getElementById(this.getAttribute('data-target'));
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            }
        });
    });
    
    // 服装设计卡片点击事件
    const costumeCards = document.querySelectorAll('.costume-card');
    const costumeModals = document.querySelectorAll('.costume-modal');
    
    costumeCards.forEach(card => {
        card.addEventListener('click', function() {
            const targetModal = document.getElementById(this.getAttribute('data-target'));
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            }
        });
    });
    
    // 关闭按钮点击事件
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.if-modal, .paro-modal, .costume-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // 恢复背景滚动
            }
        });
    });
    
    // 点击模态框外部关闭
    ifModals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // paro模态框外部点击关闭
    paroModals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // 服装设计模态框外部点击关闭
    costumeModals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    
    // Gallery页面 - 视图切换
    const viewToggles = document.querySelectorAll('.view-toggle');
    const galleryContainer = document.querySelector('.gallery-container');
    const costumeContainer = document.querySelector('.costume-container');
    const subsectionTitles = document.querySelectorAll('.subsection-title');
    const galleryIntro = document.querySelector('.gallery-intro');
    const costumeGrid = document.querySelector('.costume-grid');
    const costumeSlideshow = document.querySelector('.costume-slideshow');
    const galleryGrid = document.querySelector('.gallery-grid');
    const gallerySlideshow = document.querySelector('.gallery-slideshow');
    
    // 调试信息
    console.log('视图切换按钮:', viewToggles);
    console.log('概念艺术容器:', galleryContainer);
    console.log('服装设计容器:', costumeContainer);
    
    viewToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            console.log('切换视图到:', view);
            
            // 更新按钮状态
            viewToggles.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 更新视图
            if (view === 'costume') {
                console.log('显示服装设计视图');
                // 显示服装设计，隐藏概念艺术
                if (costumeContainer) costumeContainer.style.display = 'block';
                if (galleryContainer) galleryContainer.style.display = 'none';
                
                // 显示服装设计标题和介绍，隐藏概念艺术标题
                subsectionTitles.forEach((title, index) => {
                    if (index === 0) { // 服装设计标题
                        title.style.display = 'block';
                    } else if (index === 1) { // 概念艺术标题
                        title.style.display = 'none';
                    }
                });
                
                if (galleryIntro) galleryIntro.style.display = 'block';
                
                // 显示幻灯片视图，隐藏网格视图
                if (costumeGrid) costumeGrid.style.display = 'none';
                if (costumeSlideshow) costumeSlideshow.style.display = 'block';
                
            } else if (view === 'concept-grid') {
                console.log('显示概念艺术-网格视图');
                // 显示概念艺术，隐藏服装设计
                if (costumeContainer) costumeContainer.style.display = 'none';
                if (galleryContainer) galleryContainer.style.display = 'block';
                
                // 显示概念艺术标题，隐藏服装设计标题和介绍
                subsectionTitles.forEach((title, index) => {
                    if (index === 0) { // 服装设计标题
                        title.style.display = 'none';
                    } else if (index === 1) { // 概念艺术标题
                        title.style.display = 'block';
                    }
                });
                
                if (galleryIntro) galleryIntro.style.display = 'none';
                
                // 显示网格视图，隐藏幻灯片视图
                if (galleryGrid) galleryGrid.style.display = 'flex';
                if (gallerySlideshow) gallerySlideshow.style.display = 'none';
                
            } else if (view === 'concept-slideshow') {
                console.log('显示概念艺术-幻灯片视图');
                // 显示概念艺术，隐藏服装设计
                if (costumeContainer) costumeContainer.style.display = 'none';
                if (galleryContainer) galleryContainer.style.display = 'block';
                
                // 显示概念艺术标题，隐藏服装设计标题和介绍
                subsectionTitles.forEach((title, index) => {
                    if (index === 0) { // 服装设计标题
                        title.style.display = 'none';
                    } else if (index === 1) { // 概念艺术标题
                        title.style.display = 'block';
                    }
                });
                
                if (galleryIntro) galleryIntro.style.display = 'none';
                
                // 显示幻灯片视图，隐藏网格视图
                if (galleryGrid) galleryGrid.style.display = 'none';
                if (gallerySlideshow) gallerySlideshow.style.display = 'block';
            }
        });
    });
    
    // 初始化视图（默认显示服装设计）
    window.addEventListener('DOMContentLoaded', function() {
        const activeToggle = document.querySelector('.view-toggle.active');
        const costumeGrid = document.querySelector('.costume-grid');
        const costumeSlideshow = document.querySelector('.costume-slideshow');
        const galleryGrid = document.querySelector('.gallery-grid');
        const gallerySlideshow = document.querySelector('.gallery-slideshow');
        
        if (activeToggle && activeToggle.getAttribute('data-view') === 'costume') {
            if (galleryContainer) galleryContainer.style.display = 'none';
            // 默认显示幻灯片视图，隐藏网格视图
            if (costumeGrid) costumeGrid.style.display = 'none';
            if (costumeSlideshow) costumeSlideshow.style.display = 'block';
        } else if (activeToggle && activeToggle.getAttribute('data-view') === 'concept-grid') {
            if (costumeContainer) costumeContainer.style.display = 'none';
            subsectionTitles.forEach((title, index) => {
                if (index === 0) title.style.display = 'none';
            });
            if (galleryIntro) galleryIntro.style.display = 'none';
            if (galleryGrid) galleryGrid.style.display = 'flex';
            if (gallerySlideshow) gallerySlideshow.style.display = 'none';
        } else if (activeToggle && activeToggle.getAttribute('data-view') === 'concept-slideshow') {
            if (costumeContainer) costumeContainer.style.display = 'none';
            subsectionTitles.forEach((title, index) => {
                if (index === 0) title.style.display = 'none';
            });
            if (galleryIntro) galleryIntro.style.display = 'none';
            if (galleryGrid) galleryGrid.style.display = 'none';
            if (gallerySlideshow) gallerySlideshow.style.display = 'block';
        }
    });
    
    // 概念艺术幻灯片导航
    const slidePrev = document.querySelector('.slide-prev');
    const slideNext = document.querySelector('.slide-next');
    const slides = document.querySelectorAll('.gallery-slideshow .slide');
    let currentSlide = 0;
    
    if (slidePrev && slideNext && slides.length > 0) {
        // 初始化
        slides[currentSlide].classList.add('active');
        
        // 上一张
        slidePrev.addEventListener('click', function() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        });
        
        // 下一张
        slideNext.addEventListener('click', function() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        });
    }
    
    // 服装设计幻灯片导航
    const costumePrev = document.querySelector('.costume-prev');
    const costumeNext = document.querySelector('.costume-next');
    const costumeSlides = document.querySelectorAll('.costume-slideshow .slide');
    let currentCostumeSlide = 0;
    
    if (costumePrev && costumeNext && costumeSlides.length > 0) {
        // 初始化
        costumeSlides[currentCostumeSlide].classList.add('active');
        
        // 上一张
        costumePrev.addEventListener('click', function() {
            costumeSlides[currentCostumeSlide].classList.remove('active');
            currentCostumeSlide = (currentCostumeSlide - 1 + costumeSlides.length) % costumeSlides.length;
            costumeSlides[currentCostumeSlide].classList.add('active');
        });
        
        // 下一张
        costumeNext.addEventListener('click', function() {
            costumeSlides[currentCostumeSlide].classList.remove('active');
            currentCostumeSlide = (currentCostumeSlide + 1) % costumeSlides.length;
            costumeSlides[currentCostumeSlide].classList.add('active');
        });
    }
    
    // 查看详情按钮点击事件
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡
            const targetModal = document.getElementById(this.getAttribute('data-target'));
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            }
        });
    });
    
    // 添加页面过渡效果
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                // 淡出当前页面
                document.body.classList.add('fade-out');
                
                // 延迟导航以显示过渡效果
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            });
        }
    });
    
    // 页面加载时淡入
    document.body.classList.add('fade-in');
});

// 鼠标悬停发光效果
document.addEventListener('mousemove', function(e) {
    const glow = document.querySelector('.mouse-glow') || createGlowElement();
    
    // 更新光晕位置
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// 创建光晕元素
function createGlowElement() {
    const glow = document.createElement('div');
    glow.classList.add('mouse-glow');
    document.body.appendChild(glow);
    return glow;
}

// 页面加载完成后移除加载动画
window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.classList.add('loaded');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // 处理图片加载失败的情况
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete || img.naturalHeight === 0) {
            img.src = img.src + '?v=' + new Date().getTime(); // 添加时间戳强制刷新缓存
        }
        
        img.onerror = function() {
            // 图片加载失败时，尝试使用备用图片（如果有png版本，尝试使用jpg版本，反之亦然）
            const currentSrc = this.src;
            if (currentSrc.endsWith('.jpg') || currentSrc.endsWith('.jpg?v=' + new Date().getTime().toString().substring(0, 10))) {
                const newSrc = currentSrc.replace('.jpg', '.png').split('?')[0];
                this.src = newSrc;
            } else if (currentSrc.endsWith('.png') || currentSrc.endsWith('.png?v=' + new Date().getTime().toString().substring(0, 10))) {
                const newSrc = currentSrc.replace('.png', '.jpg').split('?')[0];
                this.src = newSrc;
            }
        };
    });
    
    // 瀑布流布局处理
    initMasonry();
});

// 瀑布流布局初始化
function initMasonry() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    // 清空现有内容
    galleryGrid.innerHTML = '';
    
    // 创建列
    const columnCount = window.innerWidth > 1200 ? 4 : window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
    
    // 创建列元素
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'gallery-column';
        galleryGrid.appendChild(column);
    }
    
    // 获取所有图片项目的HTML
    const galleryItemsHTML = [
        { html: createGalleryItemHTML('images/gallery1.JPG', '前传·诺亚', '圣子中最优秀的那位、羊群里的领头羊。') },
        { html: createGalleryItemHTML('images/gallery12.png', '前传·诺亚', '愿飞鸟远走高飞。') },
        { html: createGalleryItemHTML('images/gallery2.jpg', '前传·诺亚', '诺亚·赫尔辛基是赫尔辛基家族给教会上供的礼物之一。当掌权者把他当成一张手牌时，他便安静地、静静地在暗地里凝视着牌手。') },
        { html: createGalleryItemHTML('images/gallery3.png', '前传·雷尔提斯', '「概念体·欢愉（concept of euphoria)」最开始活动时的样子。') },
        { html: createGalleryItemHTML('images/gallery6.JPG', '告白', '他們在钟楼之上，不甚正式，也沒有任何準備的第一次告白。') },
        { html: createGalleryItemHTML('images/gallery5.PNG', 'BULBEL', '百合花的颜色。') },
        { html: createGalleryItemHTML('images/gallery7.png', '奏鸣曲', '这一曲只奏给你听。') },
        { html: createGalleryItemHTML('images/gallery13.jpg', '主不在', '当本应神圣的教权开始腐朽，当无人再敢做正确的事，当主不在场......你在。') },
        { html: createGalleryItemHTML('images/gallery8.JPG', '番外·日月之徑', '你身上有情欲的味道......那与海水的气味近似。') },
        { html: createGalleryItemHTML('images/gallery9.JPG', '番外·日月之徑', '两人一同前往混沌地带进行调查，然后雷尔提斯中途冒充为了某个名为「日月之径」的教派中的大祭司……的故事？！') },
        { html: createGalleryItemHTML('images/gallery10.JPEG', '番外·亚特兰蒂斯', '能在万里下的海底建出一座无人见了能不赞叹的城市，用魔法在漆黑的海水中亮起通明灯火——哪怕是曾經这样辉煌的人鱼文明，最终也埋没在了长夜中。') },
        { html: createGalleryItemHTML('images/gallery11.jpg', '小王子', '属于你的，那枚最独一无二的、黑漆漆的星星。') },
        { html: createGalleryItemHTML('images/gallery4.JPG', '牧羊人', '那最為桀驁不馴、從不合群的黑山羊，也會跟着某个牧羊人走。') },
        { html: createGalleryItemHTML('images/gallery14.JPG', '夜幕涌动', '可以出风头的机会就交给雷尔提斯好了。') },
        { html: createGalleryItemHTML('images/gallery15.JPG', '該怎么形容你？', '像夜里的提灯，海上的灯塔……所以视线忍不住就会聚焦向你。仔细一想，明明你总是一副黑漆漆的样子。') },
        { html: createGalleryItemHTML('images/gallery16.jpg', '梦中的结局', '如果一切可以重来，那么这次我们就不再去拯救世界，等世界迎来末日时，当天空大地与万物开始崩塌……我会与你静静地待在一起。') },

        
    ];
    
    // 将图片项目分配到各列中
    const columns = document.querySelectorAll('.gallery-column');
    galleryItemsHTML.forEach((item, index) => {
        const columnIndex = index % columns.length;
        columns[columnIndex].innerHTML += item.html;
    });
    
    // 窗口大小改变时重新布局
    window.addEventListener('resize', function() {
        initMasonry();
    });
}

// 创建图片项目的HTML
function createGalleryItemHTML(src, title, description) {
    return `
        <div class="gallery-item">
            <img src="${src}" alt="${title}" class="gallery-image">
            <div class="gallery-caption">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        </div>
    `;
}


function toggleSecret(btn) {
    const content = btn.parentElement.nextElementSibling;
    const open = content.classList.toggle('show');
    btn.textContent = open ? '🔓 收起录音文本' : '🔒 点击展开录音文本';
}




// 背景隨機星點
(function makeBackgroundStars() {
    const holder = document.querySelector('.stars');
    const COUNT = 120;
    for (let i = 0; i < COUNT; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.top = Math.random() * 100 + '%';
        s.style.left = Math.random() * 100 + '%';
        s.style.animationDuration = (1 + Math.random() * 2.2) + 's';
        s.style.animationDelay = (Math.random() * 2) + 's';
        holder.appendChild(s);
    }
})();

// 逐步流程控制：行文 → 晚安 → 星星描述 → 星星按鈕 → 安慰段
document.addEventListener('DOMContentLoaded', () => {
    const lines = [...document.querySelectorAll('.line')];
    const goodnight = document.getElementById('goodnight');
    const starDesc = document.getElementById('star-desc');
    const wishStar = document.getElementById('wish-star');
    const comfort = document.getElementById('comfort');

    // 先全部隱藏（保險）
    lines.forEach(el => el.classList.remove('show'));

    // 依序顯示普通行文（到「蓋小被子」那行為止）
    const baseDelay = 500;       // 每行間隔
    const startDelay = 300;      // 開始前延遲
    let t = startDelay;

    // 只到「少年說着，…蓋上。」(data-step=13) 先跑完
    const lastStep = 13;

    lines
        .filter(el => Number(el.dataset.step) && Number(el.dataset.step) <= lastStep)
        .forEach((el, idx) => {
            setTimeout(() => el.classList.add('show'), t);
            t += baseDelay + Math.random() * 200; // 小隨機更自然
        });

    // 跑完前半段後，顯示「晚安」
    t += 500;
    setTimeout(() => {
        goodnight.classList.remove('hidden');
        goodnight.classList.add('show');
    }, t);

    // 顯示星星描述三行
    t += 700;
    const afterGoodnight = [...document.querySelectorAll('.line.hidden[data-after="goodnight"]'),
    ...document.querySelectorAll('.line.hidden[data-after="star-desc"]')];

    afterGoodnight.forEach((el, i) => {
        setTimeout(() => {
            el.classList.remove('hidden');
            el.classList.add('show');
        }, t + i * 450);
    });

    // 顯示可點擊星星
    t += 1400;
    setTimeout(() => {
        wishStar.classList.remove('hidden');
        wishStar.classList.add('show');
    }, t);

    // 點擊星星 → 閃光 → 顯示「如果你覺得累了…」
    wishStar.addEventListener('click', () => {
        wishStar.classList.add('sparkle');
        setTimeout(() => {
            comfort.classList.remove('hidden');
            comfort.classList.add('show');
            // 讓螢幕稍微滾下，確保可見
            comfort.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 420);
        // 二次點擊也只做小動畫
        setTimeout(() => wishStar.classList.remove('sparkle'), 800);
    });
});


window.addEventListener('load', () => {
    const stars = document.querySelector('.stars');
    if (stars) {
        // 觸發一次重排/重繪
        stars.style.opacity = '0.9999';
        requestAnimationFrame(() => stars.style.opacity = '');
    }
});


