{
    let list = document.getElementById('lx-header-ul');
    let list_button = document.getElementById('lx-header-show-list');
    let bg = document.getElementById('lx-header-offcanvas-backdrop');

    // 点击菜单按钮显示菜单
    list_button.addEventListener('click', function () {
        list.classList.add('show-list');
        bg.classList.add('show-offcanvas-backdrop');
    })

    // 点击背景关闭菜单
    bg.addEventListener('click', function () {
        list.classList.remove('show-list');
        bg.classList.remove('show-offcanvas-backdrop');
    })

    // 菜单关闭按钮
    let list_close = document.getElementById('lx-header-close-list');
    list_close.addEventListener('click', function () {
        list.classList.remove('show-list');
        bg.classList.remove('show-offcanvas-backdrop');
    })

    // 滚动大于导航栏高度时，导航栏固定
    window.addEventListener('scroll', function () {
        let header = document.querySelector('.lx-header');
        window.addEventListener("scroll", () => {
            if (window.scrollY >= header.offsetHeight) {
                header.classList.add("lx-header-fixed");
            } else {
                header.classList.remove("lx-header-fixed");
            }
        });
    })

    // 搜索框
    let search_button = document.getElementById('lx-header-show-search');
    let search = document.querySelector('.lx-header .search');
    let search_bar = document.querySelector('.lx-header .search .search-bar');
    search_button.addEventListener('click', function () {
        search.classList.add('show-search');
        search_bar.classList.add('show-search-animation');
    })

    // 关闭搜索框
    let search_close = document.getElementById('lx-header-close-search');
    search_close.addEventListener('click', function () {
        search.classList.remove('show-search');
        search_bar.classList.remove('show-search-animation');
    })

    // 登录框
    let login_button = document.getElementById('lx-header-show-login');
    let login = document.querySelector('.lx-header .login');
    let login_bar = document.querySelector('.lx-header .login .login-bar');
    login_button.addEventListener('click', function () {
        login.classList.add('show-login');
        login_bar.classList.add('show-search-animation');
    })

    // 关闭登录框
    let login_close = document.getElementById('lx-header-close-login');
    login_close.addEventListener('click', function () {
        login.classList.remove('show-login');
        login_bar.classList.remove('show-search-animation');
    })
}