1. app常用事件
   + ready:当electron完成初始化时被触发
   + window-all-closed:所有窗口被关闭
   + before-quit:当应用程序开始关闭窗口之前触发
   + will-quit:当所有窗口都已关闭并且应用程序将退出时发出
   + quit:在应用程序退出时发出

2. webContents常用事件
   + did-finished-load:导航完成时触发,即选项卡的旋转器将停止旋转,并指派onload事件后。
   + dom-ready:一个框架中的文本加载完成后触发该事件。