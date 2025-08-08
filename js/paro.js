// paro页面专用脚本
document.addEventListener('DOMContentLoaded', function() {
    
    // AU卡片和模态框处理
    const paroCards = document.querySelectorAll('.paro-card');
    const paroModals = document.querySelectorAll('.paro-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    // 卡片点击事件 - 显示模态框
    paroCards.forEach(card => {
        card.addEventListener('click', function() {
            // 显示对应的模态框
            const targetModal = document.getElementById(this.getAttribute('data-target'));
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            }
        });
    });
    
    // 关闭按钮点击事件
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡
            const modal = this.closest('.paro-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // 恢复背景滚动
            }
        });
    });
    
    // 点击模态框外部关闭
    paroModals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});
