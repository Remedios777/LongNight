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
        { html: createGalleryItemHTML('images/gallery-1.png', 'Noah在高污染区', 'Noah在高污染区探索，身上的净化光环与周围的污染形成鲜明对比。') },
        { html: createGalleryItemHTML('images/gallery-2.png', 'Laertes的变异形态', 'Laertes的半变异形态，皮肤上的污染纹路发出微弱的光芒。') },
        { html: createGalleryItemHTML('images/gallery-3.png', 'Noah与Laertes的初次相遇', 'Noah与Laertes在"边界区"的初次相遇，两人的能力产生共鸣，创造出平衡区域。') },
        { html: createGalleryItemHTML('images/gallery-4.png', '伊甸园总部', '伊甸园总部"方舟"的外观，纯白的建筑漂浮在污染云层之上。') },
        { html: createGalleryItemHTML('images/gallery-5.png', '理想国总部', '理想国总部"新亚特兰蒂斯"，充满未来感的浮空城市，下方是浓重的污染云层。') },
        { html: createGalleryItemHTML('images/gallery-6.png', 'Noah的净化能力', 'Noah释放净化能力的瞬间，周围的污染物质被分解为纯净的能量。') },
        { html: createGalleryItemHTML('images/gallery-7.png', 'Laertes控制污染', 'Laertes展示控制污染的能力，将污染物质塑造成各种形态。') },
        { html: createGalleryItemHTML('images/gallery-8.png', 'Noah与Laertes的平衡状态', 'Noah与Laertes共同创造的平衡状态，形成一种新的能量形态。') },
        { html: createGalleryItemHTML('images/gallery-9.png', 'Noah的记忆碎片', 'Noah的记忆碎片，展示了他在净化实验中的经历。') },
        { html: createGalleryItemHTML('images/gallery-10.png', '长夜之门', '通往"长夜"世界的入口，被称为"长夜之门"的空间裂隙。') },
        { html: createGalleryItemHTML('images/gallery-11.png', '常世光辉断章实验室遗址', '被废弃的"常世光辉断章"实验室遗址，残留着强大的能量波动。') },
        { html: createGalleryItemHTML('images/gallery-12.png', '全知之眼观测站', '理想国的"全知之眼"观测站，用于监控污染扩散和能量波动。') },
        { html: createGalleryItemHTML('images/gallery-13.png', 'Noah在高污染区', 'Noah在高污染区探索，身上的净化光环与周围的污染形成鲜明对比。') },
        { html: createGalleryItemHTML('images/gallery-14.png', 'Laertes的变异形态', 'Laertes的半变异形态，皮肤上的污染纹路发出微弱的光芒。') },
        { html: createGalleryItemHTML('images/gallery-15.png', 'Noah与Laertes的初次相遇', 'Noah与Laertes在"边界区"的初次相遇，两人的能力产生共鸣，创造出平衡区域。') },
        { html: createGalleryItemHTML('images/gallery-16.png', '伊甸园总部', '伊甸园总部"方舟"的外观，纯白的建筑漂浮在污染云层之上。') },
        { html: createGalleryItemHTML('images/gallery-17.png', '理想国总部', '理想国总部"新亚特兰蒂斯"，充满未来感的浮空城市，下方是浓重的污染云层。') },
        { html: createGalleryItemHTML('images/gallery-18.png', 'Noah的净化能力', 'Noah释放净化能力的瞬间，周围的污染物质被分解为纯净的能量。') },
        { html: createGalleryItemHTML('images/gallery-19.png', 'Laertes控制污染', 'Laertes展示控制污染的能力，将污染物质塑造成各种形态。') },
        { html: createGalleryItemHTML('images/gallery-20.png', 'Noah与Laertes的平衡状态', 'Noah与Laertes共同创造的平衡状态，形成一种新的能量形态。') },
        { html: createGalleryItemHTML('images/gallery-21.png', 'Noah的记忆碎片', 'Noah的记忆碎片，展示了他在净化实验中的经历。') },
        { html: createGalleryItemHTML('images/gallery-22.png', '长夜之门', '通往"长夜"世界的入口，被称为"长夜之门"的空间裂隙。') },
        { html: createGalleryItemHTML('images/gallery-23.png', '常世光辉断章实验室遗址', '被废弃的"常世光辉断章"实验室遗址，残留着强大的能量波动。') },
        { html: createGalleryItemHTML('images/gallery-24.png', '全知之眼观测站', '理想国的"全知之眼"观测站，用于监控污染扩散和能量波动。') },
        { html: createGalleryItemHTML('images/gallery-25.png', 'Noah在高污染区', 'Noah在高污染区探索，身上的净化光环与周围的污染形成鲜明对比。') },
        { html: createGalleryItemHTML('images/gallery-26.png', 'Laertes的变异形态', 'Laertes的半变异形态，皮肤上的污染纹路发出微弱的光芒。') },
        { html: createGalleryItemHTML('images/gallery-27.png', 'Noah与Laertes的初次相遇', 'Noah与Laertes在"边界区"的初次相遇，两人的能力产生共鸣，创造出平衡区域。') },
        { html: createGalleryItemHTML('images/gallery-28.png', '伊甸园总部', '伊甸园总部"方舟"的外观，纯白的建筑漂浮在污染云层之上。') },
        { html: createGalleryItemHTML('images/gallery-29.png', '理想国总部', '理想国总部"新亚特兰蒂斯"，充满未来感的浮空城市，下方是浓重的污染云层。') },
        { html: createGalleryItemHTML('images/gallery-30.png', 'Noah的净化能力', 'Noah释放净化能力的瞬间，周围的污染物质被分解为纯净的能量。') },
        { html: createGalleryItemHTML('images/gallery-31.png', 'Laertes控制污染', 'Laertes展示控制污染的能力，将污染物质塑造成各种形态。') },
        { html: createGalleryItemHTML('images/gallery-32.png', 'Noah与Laertes的平衡状态', 'Noah与Laertes共同创造的平衡状态，形成一种新的能量形态。') },
        { html: createGalleryItemHTML('images/gallery-33.png', 'Noah的记忆碎片', 'Noah的记忆碎片，展示了他在净化实验中的经历。') },
        { html: createGalleryItemHTML('images/gallery-34.png', '长夜之门', '通往"长夜"世界的入口，被称为"长夜之门"的空间裂隙。') },
        { html: createGalleryItemHTML('images/gallery-35.png', '常世光辉断章实验室遗址', '被废弃的"常世光辉断章"实验室遗址，残留着强大的能量波动。') },
        { html: createGalleryItemHTML('images/gallery-36.png', '全知之眼观测站', '理想国的"全知之眼"观测站，用于监控污染扩散和能量波动。') },
        { html: createGalleryItemHTML('images/gallery-37.png', 'Noah在高污染区', 'Noah在高污染区探索，身上的净化光环与周围的污染形成鲜明对比。') },
        { html: createGalleryItemHTML('images/gallery-38.png', 'Laertes的变异形态', 'Laertes的半变异形态，皮肤上的污染纹路发出微弱的光芒。') },
        { html: createGalleryItemHTML('images/gallery-38.png', 'Noah与Laertes的初次相遇', 'Noah与Laertes在"边界区"的初次相遇，两人的能力产生共鸣，创造出平衡区域。') },
        { html: createGalleryItemHTML('images/gallery-40.png', '伊甸园总部', '伊甸园总部"方舟"的外观，纯白的建筑漂浮在污染云层之上。') },
        { html: createGalleryItemHTML('images/gallery-41.png', '理想国总部', '理想国总部"新亚特兰蒂斯"，充满未来感的浮空城市，下方是浓重的污染云层。') },
        { html: createGalleryItemHTML('images/gallery-42.png', 'Noah的净化能力', 'Noah释放净化能力的瞬间，周围的污染物质被分解为纯净的能量。') },
        { html: createGalleryItemHTML('images/gallery-43.png', 'Laertes控制污染', 'Laertes展示控制污染的能力，将污染物质塑造成各种形态。') },
        { html: createGalleryItemHTML('images/gallery-44.png', 'Noah与Laertes的平衡状态', 'Noah与Laertes共同创造的平衡状态，形成一种新的能量形态。') },
        { html: createGalleryItemHTML('images/gallery-45.png', 'Noah的记忆碎片', 'Noah的记忆碎片，展示了他在净化实验中的经历。') },
        { html: createGalleryItemHTML('images/gallery-46.png', '长夜之门', '通往"长夜"世界的入口，被称为"长夜之门"的空间裂隙。') },
        { html: createGalleryItemHTML('images/gallery-47.png', '常世光辉断章实验室遗址', '被废弃的"常世光辉断章"实验室遗址，残留着强大的能量波动。') },
        { html: createGalleryItemHTML('images/gallery-48.png', '全知之眼观测站', '理想国的"全知之眼"观测站，用于监控污染扩散和能量波动。') },
        { html: createGalleryItemHTML('images/gallery-49.png', 'Noah在高污染区', 'Noah在高污染区探索，身上的净化光环与周围的污染形成鲜明对比。') },
        { html: createGalleryItemHTML('images/gallery-50.png', 'Laertes的变异形态', 'Laertes的半变异形态，皮肤上的污染纹路发出微弱的光芒。') },
        { html: createGalleryItemHTML('images/gallery-51.png', 'Noah与Laertes的初次相遇', 'Noah与Laertes在"边界区"的初次相遇，两人的能力产生共鸣，创造出平衡区域。') },
        { html: createGalleryItemHTML('images/gallery-52.png', '伊甸园总部', '伊甸园总部"方舟"的外观，纯白的建筑漂浮在污染云层之上。') },
        { html: createGalleryItemHTML('images/gallery-53.png', '理想国总部', '理想国总部"新亚特兰蒂斯"，充满未来感的浮空城市，下方是浓重的污染云层。') },
        { html: createGalleryItemHTML('images/gallery-54.png', 'Noah的净化能力', 'Noah释放净化能力的瞬间，周围的污染物质被分解为纯净的能量。') }, 
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


document.addEventListener('scroll', () => {
    const btn = document.querySelector('.easter-egg-fab');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    // 當滾動到最底（或接近最底 50px 以內）時顯示按鈕
    if (scrollTop + viewportHeight >= fullHeight - 50) {
        btn.classList.remove('hidden');
    } else {
        btn.classList.add('hidden');
    }
});

