function mustLandscape(width, height) {
    document
        .querySelector(".blank__page")
        .classList.toggle("show", width < height);
    if (width < height) {
        alert(
            "Sorry, you must on landscape screen if want to see this content"
        );
    }
}
/* Get into full screen */
function GoInFullscreen(element) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
}
/* Is currently in full screen or not */
function IsFullScreenCurrently() {
    var full_screen_element =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        null;

    // If no element is in full-screen
    if (full_screen_element === null) return false;
    else return true;
}
function redrawChart(...charts) {
    charts.forEach((chart) => {
        let { isChart, dataChart } = chart;
        if (isChart) {
            isChart.forEach((e) => {
                e.reflow();
            });
        }
    });
}
function closeLoader() {
    document.querySelector(".loading__section").classList.remove("show");
}
function getDataChart() {
    const urlImages = document
        .getElementById("hero-content")
        .getAttribute("data-logo");

    const dataChart = [
        {
            id: "chart-1",
            data: [
                {
                    name: "2015",
                    color: "yellow",
                    data: [2, 1, 116, 5, 6, 5, 5, 1, 32],
                },
                {
                    name: "2016",
                    color: "red",
                    data: [2, 1, 106, 5, 6, 5, 7, 1, 37],
                },
            ],
        },
        {
            id: "chart-2",
            data: [
                {
                    name: "2015",
                    color: "blue",
                    data: [4, 341, 33, 53, 23, 53, 535, 43, 43],
                },
                {
                    name: "2016",
                    color: "black",
                    data: [24, 341, 42, 43, 636, 34, 347, 43, 34],
                },
            ],
        },
    ];

    return { urlImages, dataChart };
}

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
function runAnimation(indexOfSlider, callback, timeWait) {
    // hapus semua attribut style terlebih dahulu ( baik punya atau tidak)
    const sliderActive = $(".carousel-item")[indexOfSlider];
    $(".carousel-item").removeAttr("style");

    if ($(sliderActive).hasClass("carousel-chart")) {
        chartAnimation(sliderActive, callback, timeWait);
    } else if ($(sliderActive).hasClass("carousel-org")) {
        orgChartAnimation(sliderActive, callback, timeWait);
    } else {
        tableAnimation(sliderActive, callback, timeWait);
    }
}

function headerAnimation(duration = 3) {
    // const animate = ["bounce", "back", "slow", "elastic", "power4", "expo"];
    const animate = ["slow"];
    const randomAnimate = animate[randomIndex(animate)];

    // const offsetY = { opacity: 0, duration, y: "-100", ease: randomAnimate };
    const scale = { opacity: 0, duration, scale: 0, ease: randomAnimate };
    // const rotate = {
    //     opacity: 0,
    //     duration,
    //     rotate: "360deg",
    //     scale: 0,
    //     ease: randomAnimate,
    // };

    // const result = [offsetY, scale, rotate];
    const result = [scale];
    return result[randomIndex(result)];
}

function chartAnimation(el, callback, timeWait) {
    el = $(el);
    if (el.children().length > 0) {
        el.highcharts().destroy();
    }
    const { dataChart, urlImages } = getDataChart();

    dataChart.forEach((data) => {
        if (data.id == el.attr("id")) {
            createHighChart(data.id, data.data, urlImages, timeWait);
        }
    });

    const header = el
        .children()
        .children("span.highcharts-title")
        .children()[0];

    // const body = el
    //     .children()
    //     .children("svg.highcharts-root")
    //     .children("g.highcharts-series-group");

    const complete = {
        onComplete: () => setTimeout(() => callback(), timeWait),
    };
    const { onComplete } = complete;
    const animation = headerAnimation();
    const useComplete = { ...animation, onComplete };

    // beri oncomplete pada data json terakhir
    const element = [
        {
            el: header,
            animation: useComplete,
        },
    ];
    giveGSAP(element);
}
function tableAnimation(el, callback, timeWait) {
    el = $(el);
    const header = el.children().children().children()[0];
    const body = el.children().children()[1];

    // beri oncomplete pada data json terakhir
    const complete = {
        delay: 0.5,
        onComplete: () => setTimeout(() => callback(), timeWait),
    };
    const { onComplete, delay } = complete;
    const animation = headerAnimation();
    const useComplete = { ...headerAnimation(), onComplete, delay };

    // beri oncomplete pada data json terakhir
    const element = [
        {
            el: header,
            animation,
        },
        {
            el: body,
            animation: useComplete,
        },
    ];

    giveGSAP(element);
}
function orgChartAnimation(el, callback, timeWait) {
    el = $(el);
    const container = document.querySelector(`#${el.attr("id")} .body-org`);
    const data = [
        {
            id: "bagan-struktur",
            nodes: [
                {
                    id: 1,
                    html: `<div class="parent">
            <h4>PENYANTUN</h4> 
          
             <h6>PARA WAKIL KETUA</h6></div>`,
                },
                {
                    id: 2,
                    pid: 1,
                    tags: ["assistant"],
                    html: `<div class="parent"><h4>PENASEHAT</h4></div>`,
                },
                {
                    id: 3,
                    pid: 1,
                    tags: ["assistant"],
                    html: `<div class="parent"><h4>DEWAN PEMBINA</h4></div>`,
                },
                {
                    id: 4,
                    pid: 1,
                    tags: ["assistant"],
                    html: `<div class="parent">
            <h4>SEKRETARIS</h4> 
          
             <h6>PARA WAKIL SEKRETARIS</h6></div>`,
                },
                {
                    id: 5,
                    pid: 1,
                    tags: ["assistant"],
                    html: `<div class="parent">
            <h4>BENDAHARA</h4> 
          
             <h6>PARA WAKIL BENDAHARA</h6></div>`,
                },
                {
                    id: 6,
                    pid: 1,
                    tags: ["pokja"],
                    html: `<div class="parent">
            <h4>POKJA I</h4> 
             <h6>KETUA</h6>
             <h6>WAKIL KETUA</h6>
             <h6>SEKRETARIS</h6>
             <h6>ANGGOTA</h6>
             </div>`,
                },
                {
                    id: 7,
                    pid: 1,
                    tags: ["pokja"],
                    html: `<div class="parent">
            <h4>POKJA II</h4> 
             <h6>KETUA</h6>
             <h6>WAKIL KETUA</h6>
             <h6>SEKRETARIS</h6>
             <h6>ANGGOTA</h6>
             </div>`,
                },
                {
                    id: 8,
                    pid: 1,
                    tags: ["pokja"],
                    html: `<div class="parent">
            <h4>POKJA III</h4> 
             <h6>KETUA</h6>
             <h6>WAKIL KETUA</h6>
             <h6>SEKRETARIS</h6>
             <h6>ANGGOTA</h6>
             </div>`,
                },
                {
                    id: 9,
                    pid: 1,
                    tags: ["pokja"],
                    html: `<div class="parent">
            <h4>POKJA IV</h4> 
             <h6>KETUA</h6>
             <h6>WAKIL KETUA</h6>
             <h6>SEKRETARIS</h6>
             <h6>ANGGOTA</h6>
             </div>`,
                },
            ],
        },
        {
            id: "pengurus-pkk",
            nodes: [
                {
                    id: 1,
                    html: `
                    <div class="parent">
                        <h5 class="title">PENYANTUN</h5>
                        <h6 class="subtitle">KEPALA DESA</h6>
                    </div>`,
                },
                {
                    id: 2,
                    pid: 1,
                    tags: ["ketuaDanWakil"],
                    html: `
                    <div class="parent">
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">KETUA</h5> 
                                    <h6 class="subtitle">NY ZULAIKAH</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">WAKIL KETUA I</h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">WAKIL KETUA II</h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">WAKIL KETUA III</h5> 
                                    <h6 class="subtitle">&mdash;</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">WAKIL KETUA IV</h5> 
                                    <h6 class="subtitle">&mdash;</h6>
                            </div>
                        </div>
                    </div>
                    `,
                },
                {
                    id: 4,
                    pid: 2,
                    tags: ["pokja", "assistant"],
                    html: `
                    <div class="parent">
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">BENDAHARA</h5> 
                                    <h6 class="subtitle">NY ZULAIKAH</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">WAKIL BENDAHARA</h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                       
                    </div>
                    `,
                },
                {
                    id: 3,
                    pid: 2,
                    tags: ["pokja", "assistant"],
                    html: `
                    <div class="parent">
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">SEKRETARIS</h5> 
                                    <h6 class="subtitle">NY ZULAIKAH</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">WAKIL SEKRETARIS</h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                       
                    </div>
                    `,
                },
                {
                    id: 5,
                    pid: 2,
                    tags: ["ketuaDanWakil"],
                    html: `
                    <div class="parent">
                        <h3 class="title-parent">POKJA I</h3>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">KETUA</h5> 
                                    <h6 class="subtitle">NY ZULAIKAH</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">WAKIL KETUA </h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">SEKRETARIS</h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">ANGGOTA</h5> 
                                    <h6 class="subtitle">&mdash;</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">ANGGOTA</h5> 
                                    <h6 class="subtitle">&mdash;</h6>
                            </div>
                        </div>
                    </div>
                    `,
                },
                {
                    id: 6,
                    pid: 2,
                    tags: ["ketuaDanWakil"],
                    html: `
                    <div class="parent">
                        <h3 class="title-parent">POKJA II</h3>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">KETUA</h5> 
                                    <h6 class="subtitle">NY ZULAIKAH</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">WAKIL KETUA </h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">SEKRETARIS</h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">ANGGOTA</h5> 
                                    <h6 class="subtitle">&mdash;</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">ANGGOTA</h5> 
                                    <h6 class="subtitle">&mdash;</h6>
                            </div>
                        </div>
                    </div>
                    `,
                },
                {
                    id: 7,
                    pid: 2,
                    tags: ["ketuaDanWakil"],
                    html: `
                    <div class="parent">
                        <h3 class="title-parent">POKJA III</h3>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">KETUA</h5> 
                                    <h6 class="subtitle">NY ZULAIKAH</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">WAKIL KETUA </h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">SEKRETARIS</h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">ANGGOTA</h5> 
                                    <h6 class="subtitle">&mdash;</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">ANGGOTA</h5> 
                                    <h6 class="subtitle">&mdash;</h6>
                            </div>
                        </div>
                    </div>
                    `,
                },
                {
                    id: 8,
                    pid: 2,
                    tags: ["ketuaDanWakil"],
                    html: `
                    <div class="parent">
                        <h3 class="title-parent">POKJA IV</h3>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">KETUA</h5> 
                                    <h6 class="subtitle">NY ZULAIKAH</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">WAKIL KETUA </h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">SEKRETARIS</h5> 
                                    <h6 class="subtitle">NY LISWATI</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">ANGGOTA</h5> 
                                    <h6 class="subtitle">&mdash;</h6>
                            </div>
                        </div>
                        <div class="with-image">
                            <img src="assets/images/user.png">
                            <div class="parent">
                                    <h5 class="title">ANGGOTA</h5> 
                                    <h6 class="subtitle">&mdash;</h6>
                            </div>
                        </div>
                    </div>
                    `,
                },
            ],
        },
    ];

    setTimeout(() => {
        data.forEach((d) => {
            if (d.id === el.attr("id")) {
                orgChartBaganStruktur(container, d.nodes); //buat baru
            }
        });
    }, 100);

    // console.log(container.contentDocument);
    // squares.forEach((square) => {
    //     console.log(square);
    // });

    const header = el.children().children().children()[0];

    // const body = el.children().children()[1];

    // beri oncomplete pada data json terakhir
    const complete = {
        onComplete: () => setTimeout(() => callback(), timeWait),
    };
    const { onComplete } = complete;

    const animation = headerAnimation();
    const useComplete = { ...headerAnimation(), onComplete };

    // beri oncomplete pada data json terakhir
    const element = [
        {
            el: header,
            animation: useComplete,
        },
    ];

    giveGSAP(element);
}
function giveGSAP(arrayElement) {
    arrayElement.forEach((e) => {
        e.el.removeAttribute("style");
        gsap.from(e.el, e.animation);
    });
}

function createHighChart(idElement, data, ...option) {
    return Highcharts.chart(idElement, {
        chart: {
            type: "column",
        },
        title: {
            useHTML: true,
            text: `
   <div class="d-flex text-center border-bottom border-3 border-dark align-items-center justify-content-center">

    <img  src="${option[0]}">
    <div>
      <h1 class="title fw-bold">DATA GRAFIK POKJA - II</h1>
      <h1 class="subtitle">TP - PKK DESA TIKUSAN <br> KECAMATAN KAPAS</h1>
    </div>

    </div>

    `,
        },
        xAxis: {
            categories: [
                "KLP PAUD / SEJENIS",
                "KELOMPOK BKB",
                "IBU PESERTA",
                "APE (SET)",
                "TUTOR PAUD / SEJENIS",
                "KADER KHUSUS BKB",

                "KADER KHUSUS KETRAMPILAN",

                "KLP PRAKOP USGER/UP2K",
                "PESERTA PRAKOP USGER / UP2K",
            ],
            crosshair: true,
        },
        yAxis: {
            min: 0,
            title: {
                text: "Jumlah Orang",
            },
        },

        tooltip: {
            headerFormat:
                '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} orang</b></td></tr>',
            footerFormat: "</table>",
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
            series: {
                dataLabels: {
                    enabled: true,
                },
                animation: {
                    duration: option[1] + 200,
                },
            },
        },
        series: data,
    });
}
function orgChartBaganStruktur(element, nodes) {
    OrgChart.templates.ana.html =
        '<foreignobject class="node_value" x="20" y="10" width="200" height="100">{val}</foreignobject>';

    OrgChart.templates.tPokja = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.tPokja.size = [300, 200];
    OrgChart.templates.tPokja.html =
        '<foreignobject class="node_value" width="300" height="200">{val}</foreignobject>';

    OrgChart.templates.ketuaDanWakil = Object.assign(
        {},
        OrgChart.templates.ana
    );
    OrgChart.templates.ketuaDanWakil.size = [300, 500];
    OrgChart.templates.ketuaDanWakil.html =
        '<foreignobject class="node_value" width="300" height="500">{val}</foreignobject>';

    let chart = new OrgChart(element, {
        mouseScrool: OrgChart.action.none,
        template: "ana",
        siblingSeparation: 200,
        scaleInitial: OrgChart.match.boundary,
        enableSearch: false,
        nodeBinding: {
            html: "html",
        },
        tags: {
            pokja: {
                template: "tPokja",
            },
            ketuaDanWakil: {
                template: "ketuaDanWakil",
            },
        },
    });

    chart.editUI.on("show", function (sender, nodeId) {
        return false;
    });

    chart.load(nodes);
}
