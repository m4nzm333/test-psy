
const showSoal2Petunjuk = async () => {
    setProgress('soal2Petunjuk');
    $("#root").html(`<div style="display:none; margin-top:200px" id="petunjukSoal2" >
        <h1 class="text-center my-5">Soal 2</h1>
        <p class="lead my-5 text-center" style="font-size:20px">Dalam beberapa saat lagi, Soal dan Kolom jawaban akan ditayangkan. <strong>INGAT!!</strong> Soal akan dibatasi oleh waktu sehingga kerjakan secepat dan setepat mungkin. Tuliskan Jawaban anda di kolom yang sudah disediakan.</p>
    </div>`);

    $("#petunjukSoal2").fadeIn();

    for(var i = 7; i >= 0; i--){
        console.log(i);
        await sleep(1000);
    }
    $("#petunjukSoal2").fadeOut();

    showSoal2();
}

const showSoal2Selesai = async () => {
    setProgress('soal2Selesai');
    if(mode != 3){
        $("#root").html(`<div style="display:none; margin-top:200px" id="selesaiSoal2" >
            <h4 class="text-center my-5">Tayangan kata-kata dan gambar telah selesai. <br>
            Beberapa saat lagi, akan muncul soal dan kolom untuk mengerjakan soal
            </h4>
        </div>`);

        $("#selesaiSoal2").fadeIn();
        for(var i = 10; i >= 0; i--){
            console.log(i);
            await sleep(1000);
        }
        $("#selesaiSoal2").fadeOut();
    }
    showSoal2Quiz();
}

const soal2Manifest = [
    {
        title : 'KAYU BAKAR',
        url : 'assets/img/aut/pensil1.jpg'
    },
    {
        title : 'SUMPIT MAKAN',
        url : 'assets/img/aut/pensil2.jpg'
    },
    {
        title : 'KARYA UKIR',
        url : 'assets/img/aut/pensil3.jpg'
    },
    {
        title : 'PENUNJUK BACA ',
        url : 'assets/img/aut/pensil4.jpg'
    },
    {
        title : 'PEMBUKA BOTOL',
        url : 'assets/img/aut/pensil5.jpg'
    },
    {
        title : 'MEMECAHKAN JERAWAT',
        url : 'assets/img/aut/pensil6.jpg'
    },
    {
        title : 'TUSUK KONDE',
        url : 'assets/img/aut/pensil7.jpg'
    },
    {
        title : 'MENGGULUNG BENANG',
        url : 'assets/img/aut/pensil8.jpg'
    },
    {
        title : 'MELUBANGI KERTAS',
        url : 'assets/img/aut/pensil9.jpg'
    },
    {
        title : 'ALAT MENGGARUK',
        url : 'assets/img/aut/pensil10.jpg'
    },
    {
        title : 'POINTER',
        url : 'assets/img/aut/pensil11.jpg'
    },
    {
        title : 'STICK DRUM',
        url : 'assets/img/aut/pensil12.jpg'
    },
    {
        title : 'PLUIT',
        url : 'assets/img/aut/pensil13.jpg'
    },
    {
        title : 'VAS BUNGA',
        url : 'assets/img/aut/pensil14.jpg'
    },
    {
        title : 'BINGKAI FOTO',
        url : 'assets/img/aut/pensil15.jpg'
    },
]

const showSoal2 = async () => {
    setProgress('soal2Gambar');
    if(mode != 3){
        $("#root").html(
            `<div class="text-center" id="soal2Root">
                <h1 id="soal2Title" class="my-5" style="display:none; font-size: 60px; margin-top:150px !important"></h1>
                <img src="" style="display:none; margin-top:20px !important" alt="Soal " id="soal2Img" height="500px">
            </div>`);
        
        for(var i = 0; i < soal2Manifest.length; i++){
            $("#soal2Title").html(soal2Manifest[i].title);
            // Mode 0
            if(mode == 0){
                $("#soal2Img").attr('src', soal2Manifest[i].url)
            }
            // Mode 1
            if(mode == 1){
                $("#soal2Img").attr('src', '../' + soal2Manifest[i].url) 
            }
            $("#soal2Title").fadeIn(500);
            await sleep(2000)
            $("#soal2Title").fadeOut(10);
            await sleep(20)
            $("#soal2Img").fadeIn(500);
            await sleep(2000)
            $("#soal2Img").fadeOut(10);
            await sleep(20)
        }
    }
    showSoal2Selesai();
}

const showSoal2Quiz = async () => {
    setProgress('soal2Quiz');
    $('#root').html(`
    <div class="text-center" id="quizSoal2" style="display:none">
        <h2 class="lead">Sebutkan fungsi lain dari PENSIL <br>(selain digunakan untuk menulis)</h2>
        <img src="${loc}assets/img/aut/pensil.jpg" alt="Latihan 1 Soal" class="img-fluid" width="400px">
        <hr>
        <div class="row align-content-justify d-flex justify-content-center" >
            <div class="col-12 col-sm-12 col-md-6 ">
                <ol id="formQuizSoal2">
                </ol>
                <button class="btn btn-success btn-lg btn-block" id="btnSoal2Selesai">Selesai</button>
            </div>
        </div>
    </div>`)

    for(var i = 1; i <= 100; i++){
        $("#formQuizSoal2").append(`<li>
        <input type="text" id="inputSoal2-${i}" class="form-control">
    </li>`)
    }

    $("#quizSoal2").fadeIn(500);

    // Ganti Timeout sesuai dengan req
    var quizSoal2Timeout = 240;
    var varInterval = setInterval(() => {
        console.log(quizSoal2Timeout);
        if(quizSoal2Timeout <= 0){
            clearInterval(varInterval);
            saveSoal2Jawaban();
        }
        quizSoal2Timeout--
    }, 1000)
    $("#btnSoal2Selesai").click(() => {
        clearInterval(varInterval);
        saveSoal2Jawaban();
    });
}

const saveSoal2Jawaban = async () => {
    // Get Jawaban Soal 2
    var jawaban2 = []; 
    for(var i = 1; i <= 100; i++){
        if($(`#inputSoal2-${i}`).val() != ''){
            jawaban2.push($(`#inputSoal2-${i}`).val());
        }
    }
    console.log(idResponden);
    db.collection('responden').doc(getIdResponden()).set({
        autSoal2 : jawaban2 
    }, {merge : true})
    .then(() => {
        $("#quizSoal2").fadeOut(500);
        showSoal3Petunjuk();
    })
}