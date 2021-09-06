<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="icon" href="{{ asset('assets') }}/images/logo-desa.png" />


    <link rel="stylesheet" href="{{ asset('assets') }}/css/hightcharts/light-grid.css" />


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <!-- diagram chart -->

    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/orgchart/3.1.1/css/jquery.orgchart.css" integrity="sha512-8m7AdRqvsZpBTW8SivqVVySlGq78M7Zj8West+fF9JLpTyJ9SXdydI+Sl1Gz+FAH7DuBV8s8UX0IVdIfN9zJTw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->



    <!-- style.css -->
    <link rel="stylesheet" href="{{ asset('assets') }}/css/style.css" />
    <title>Sumber informasi digital Desa Tikusan</title>
</head>

<body>
    <div class="blank__page"></div>
    <div class="loading__section show"></div>


    <div id="hero-content" data-logo="/assets/images/logo-desa.png">
        <div id="carouselHeroContent" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">

                <div class="carousel-item active">
                    <div class="container-fluid">
                        <div class="header mt-2 d-flex justify-content-center">
                            <div class="highcharts-title">
                                <div class="d-flex text-center border-bottom border-3 border-dark align-items-center justify-content-center">
                                    <img alt="logo desa" src="/assets/images/logo-desa.png" />
                                    <div>
                                        <h1 class="title fw-bold">
                                            PERBANDINGAN DATA UP2K - PKK
                                        </h1>
                                        <h1 class="subtitle">
                                            TP - PKK DESA TIKUSAN <br />
                                            KECAMATAN KAPAS
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <table class="table mt-4 table-landingpage table-bordered">
                            <thead class="text-center">
                                <tr>
                                    <th rowspan="2">NO</th>
                                    <th rowspan="2">KOMPONEN</th>
                                    <th colspan="2">TAHUN</th>
                                    <th colspan="2">KETERANGAN</th>
                                </tr>
                                <tr>
                                    <th>2015</th>
                                    <th>2016</th>
                                    <th>NAIK</th>
                                    <th>TURUN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">1.</td>
                                    <td class="fw-bold">JML. KELOMPOK PERORANGAN</td>
                                    <td class="text-center">32</td>
                                    <td class="text-center">37</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">2.</td>
                                    <td class="fw-bold">JML. BANTUAN MODAL</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">1.500.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">3.</td>
                                    <td class="fw-bold">JENIS USAHA</td>
                                    <td class="text-center">11</td>
                                    <td class="text-center">9</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">4.</td>
                                    <td class="fw-bold">JML. ANGSURAN PINJAMAN</td>
                                    <td class="text-center">2.900.000</td>
                                    <td class="text-center">3.670.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">5.</td>
                                    <td class="fw-bold">JML. IURAN PENGELOLAAN</td>
                                    <td class="text-center">300.000</td>
                                    <td class="text-center">367.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">6.</td>
                                    <td class="fw-bold">JML. SIMPANAN TAB.POKOK</td>
                                    <td class="text-center">520.000</td>
                                    <td class="text-center">630.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">7.</td>
                                    <td class="fw-bold">JML. SIMPANAN TAB.WAJIB</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">8.</td>
                                    <td class="fw-bold">JML. SIMPANAN TAB.SUKARELA</td>
                                    <td class="text-center">299.000</td>
                                    <td class="text-center">1.331.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">9.</td>
                                    <td class="fw-bold">JML. MODAL USAHA AWAL</td>
                                    <td class="text-center">1.700.000</td>
                                    <td class="text-center">1.500.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">10.</td>
                                    <td class="fw-bold">JML. MODAL USAHA AKHIR</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">1.867.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div class="carousel-item  carousel-chart " id="chart-1"></div>
                <div class="carousel-item">

                    <div class="container-fluid">

                        <div class="header mt-2 d-flex justify-content-center">
                            <div class="highcharts-title">
                                <div class="
                                    d-flex
                                    text-center
                                    border-bottom border-3 border-dark
                                    align-items-center
                                    justify-content-center">
                                    <img alt="logo desa" src="/assets/images/logo-desa.png" />
                                    <div>
                                        <h1 class="title fw-bold">
                                            DATA GRAFIK POKJA I
                                        </h1>
                                        <h1 class="subtitle">
                                            TP - PKK DESA TIKUSAN <br />
                                            KECAMATAN KAPAS
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <table class="table mt-4 table-landingpage table-bordered">
                            <thead class="text-center">
                                <tr>
                                    <th rowspan="2">NO</th>
                                    <th rowspan="2">KOMPONEN</th>
                                    <th colspan="2">TAHUN</th>
                                    <th colspan="2">KETERANGAN</th>
                                </tr>
                                <tr>
                                    <th>2015</th>
                                    <th>2016</th>
                                    <th>NAIK</th>
                                    <th>TURUN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">1.</td>
                                    <td class="fw-bold">JML. KELOMPOK PERORANGAN</td>
                                    <td class="text-center">32</td>
                                    <td class="text-center">37</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">2.</td>
                                    <td class="fw-bold">JML. BANTUAN MODAL</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">1.500.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">3.</td>
                                    <td class="fw-bold">JENIS USAHA</td>
                                    <td class="text-center">11</td>
                                    <td class="text-center">9</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">4.</td>
                                    <td class="fw-bold">JML. ANGSURAN PINJAMAN</td>
                                    <td class="text-center">2.900.000</td>
                                    <td class="text-center">3.670.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">5.</td>
                                    <td class="fw-bold">JML. IURAN PENGELOLAAN</td>
                                    <td class="text-center">300.000</td>
                                    <td class="text-center">367.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">6.</td>
                                    <td class="fw-bold">JML. SIMPANAN TAB.POKOK</td>
                                    <td class="text-center">520.000</td>
                                    <td class="text-center">630.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">7.</td>
                                    <td class="fw-bold">JML. SIMPANAN TAB.WAJIB</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">8.</td>
                                    <td class="fw-bold">JML. SIMPANAN TAB.SUKARELA</td>
                                    <td class="text-center">299.000</td>
                                    <td class="text-center">1.331.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">9.</td>
                                    <td class="fw-bold">JML. MODAL USAHA AWAL</td>
                                    <td class="text-center">1.700.000</td>
                                    <td class="text-center">1.500.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="text-center">10.</td>
                                    <td class="fw-bold">JML. MODAL USAHA AKHIR</td>
                                    <td class="text-center">-</td>
                                    <td class="text-center">1.867.000</td>
                                    <td class="text-center">
                                        <i class="fas fa-check"></i>
                                    </td>
                                    <td class="text-center">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div class="carousel-item carousel-org" id="pengurus-pkk">
                    <div class="container-fluid">
                        <div class="header mt-2 d-flex justify-content-center">
                            <div class="highcharts-title">
                                <div class="
                                    d-flex
                                    text-center
                                    border-bottom border-3 border-dark
                                    align-items-center
                                    justify-content-center">
                                    <img alt="logo desa" src="/assets/images/logo-desa.png" />
                                    <div>
                                        <h1 class="title fw-bold">
                                            STRUKTUR KEPENGURUSAN PKK
                                        </h1>
                                        <h1 class="subtitle">
                                            TP - PKK DESA TIKUSAN <br />
                                            KECAMATAN KAPAS
                                        </h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="body-org">

                        </div>
                    </div>
                </div>
                <div class="carousel-item carousel-chart" id="chart-2"></div>
                <div class="carousel-item carousel-org" id="bagan-struktur">
                    <div class="container-fluid">
                        <div class="header mt-2 d-flex justify-content-center">
                            <div class="highcharts-title">
                                <div class="
                                    d-flex
                                    text-center
                                    border-bottom border-3 border-dark
                                    align-items-center
                                    justify-content-center">
                                    <img alt="logo desa" src="/assets/images/logo-desa.png" />
                                    <div>
                                        <h1 class="title fw-bold">
                                            BAGAN STRUKTUR <br> TP PKK DAERAH
                                        </h1>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="body-org">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <!-- gsap -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js"></script>

    <!-- balkan chart organization -->
    <script src="{{ asset('assets') }}/vendor/orgchart/orgchart.js"></script>

    <!-- high chart js -->
    <script src="https://code.highcharts.com/highcharts.js"></script>

    <!-- diagram chart -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/orgchart/3.1.1/js/jquery.orgchart.js" integrity="sha512-k9Y1DWEYbVYVmkZLxM+o99j3R30eLzEwuCAW4zQghgMVmXVYqD0F9gctdsuGRusNDV7cH4p3zppqfKhUM9V87A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->


    <script src="{{ asset('assets') }}/js/functions.js"></script>
    <!-- my script -->
    <script src="{{ asset('assets') }}/js/script.js"></script>
</body>

</html>