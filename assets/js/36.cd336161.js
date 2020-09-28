(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{341:function(t,a,n){"use strict";n.r(a);var e=n(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"_1-前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1. 前言")]),t._v(" "),n("p",[t._v("​\tDocker容器安全目前推荐的技术方案是 : "),n("strong",[t._v("Kata Containers")]),t._v("，那先来认识一下什么是kata containers。")]),t._v(" "),n("p",[t._v("​\tKata Containers是一个开源项目和社区，致力于"),n("strong",[t._v("构建轻量级虚拟机（VM）的标准实现——这些虚拟机的感知和执行类似容器")]),t._v("，但提供VM的工作负载隔离和安全优势，内核级别的隔离宿主机的内核！Kata Containers 项目最初是基于 "),n("strong",[t._v("QEMU")]),t._v(" 的，但它的设计从一开始就以支持多种管理程序解决方案为出发点。")]),t._v(" "),n("h3",{attrs:{id:"_2-kata-containers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-kata-containers"}},[t._v("#")]),t._v(" 2. kata-containers")]),t._v(" "),n("p",[t._v("kata containers是由OpenStack基金会管理，但独立于OpenStack项目之外的容器项目。它是一个"),n("strong",[t._v("可以使用容器镜像以超轻量级虚机的形式创建容器的运行时工具")]),t._v("。 kata containers整合了Intel的 Clear Containers 和 Hyper.sh 的 runV，能够支持不同平台的硬件 （x86-64，arm等），并符合**OCI(Open Container Initiative)**规范，同时还可以兼容k8s的 **CRI（Container Runtime Interface）**接口规范。目前项目包含几个配套组件，即Runtime，Agent， Proxy，Shim，Kernel等")]),t._v(" "),n("p",[t._v("真正启动Docker容器的命令工具是RunC，它是OCI运行时规范 (runtime-spec)的默认实现。Kata containers其实跟RunC类似，也是一个符合OCI运行时规范的一种 实现（即"),n("strong",[t._v("Clear Container和runV 都符OCI规范")]),t._v("），不同之处是，它给每个容器（在Docker容器的 角度）或每个Pod（k8s的角度）增加了一个独立的linux内核（不共享宿主机的内核），使容器有更好 的隔离性，安全性。")]),t._v(" "),n("p",[n("strong",[t._v("2.1）docker的runtime模式架构图：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/images/8.docker%E7%9A%84runtime%E6%9E%B6%E6%9E%84%E5%9B%BE.png",alt:""}})]),t._v(" "),n("p",[t._v("​\t可以看到runC处于docker组件图的最底端，runC下面就是容器。目前docker已经不是一个专一的容器 管理组件，而真正的容器管理组件是containerd，而containerd本身也不会直接跟操作系统交互，去创建、删除容器，而是借助runC来对容器生命周期进行管理，因此runC作为必须遵循OCI规范。")]),t._v(" "),n("p",[n("strong",[t._v("2.2）kata containers定义位置：")])]),t._v(" "),n("p",[t._v("kata containers在容器的什么位置，应该就显而易见了。它符合OCI运行时规 范，因此，可以作为runC的替代组件，如红色虚线框内所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:"/images/8.docker%E7%9A%84runtime%E6%9E%B6%E6%9E%84%E5%9B%BE2.png",alt:""}})]),t._v(" "),n("p",[n("strong",[t._v("2.3）kata container原理")])]),t._v(" "),n("p",[t._v("​\tkata container实质上是在虚拟机内部使用container（基于runc的实现）。 kata-container使用虚拟化软件(qemu-lite优化过的qemu)， 通过已经将kata-agent 安装的kernel & intrd image，启动过一个轻量级的虚拟机， 使用nvdimm将initrd image映射到guest vm中。然后由kata-agent为container创建对应的namespace和资源。 Guest VM作为实质上的sandbox可以完全与host kernel进行隔离。")]),t._v(" "),n("p",[n("img",{attrs:{src:"/images/8.kata-container%E5%8E%9F%E7%90%86png.png",alt:""}})]),t._v(" "),n("p",[n("strong",[t._v("组件拆分介绍")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("kata-runtime")]),t._v("：实现OCI接口，可以通过CRI-O 与kubelet对接作为k8s runtime server， containerd对接docker engine，创建运行container/pod的VM")]),t._v(" "),n("li",[n("strong",[t._v("kata-proxy")]),t._v(": 每一个container都会由一个kata-proxy进程，kata-proxy负责与kata-agent通讯，当guest vm启动后，kata-agent会随之启动并使用qemu virtio serial console 进行通讯")]),t._v(" "),n("li",[n("strong",[t._v("kata-agent")]),t._v("： 运行在guest vm中的进程， 主要依赖于"),n("strong",[t._v("libcontainer")]),t._v("项目，重用了大部分的runc代码，为container创建namespace(NS, UTS, IPC and PID)")]),t._v(" "),n("li",[n("strong",[t._v("kata-shim")]),t._v(": 作为guest vm标准输入输出的接口，exec命令就是同kata-shim实现的。（其实相当于是container-shim的一个适配）")])]),t._v(" "),n("p",[n("strong",[t._v("2.4）classic Docker与Docker with Kata的架构")])]),t._v(" "),n("p",[t._v("![](/images/8.Docker with Kata架构设计.png)")])])}),[],!1,null,null,null);a.default=r.exports}}]);