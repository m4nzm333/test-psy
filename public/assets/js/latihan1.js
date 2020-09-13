var sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const showLatihan1Petunjuk = async () => {
    setProgress('latihan1Petunjuk');
    $("#root").html(`<div id="latihan1Petunjuk" style="display:none; margin-top:150px">
        <h1 class="text-center my-5">LATIHAN</h1>
        <p class="lead">Dalam beberapa saat lagi, Soal dan Kolom jawaban akan ditayangkan.  <strong>INGAT!!</strong> Soal akan dibatasi oleh waktu sehingga kerjakan secepat dan setepat mungkin. Tuliskan Jawaban anda di kolom yang sudah disediakan.</p>
    </div>`);

    $("#latihan1Petunjuk").fadeIn();
    await sleep(7000);
    $("#latihan1Petunjuk").fadeOut();
    showLatihan1();
}

const showLatihan1Selesai = async () => {
    setProgress('latihan1Selesai');
    $("#root").html(`<div id="latihan1Selesai" style="display:none" class="text-center my-5">
        <h3 class="text-center">Itulah tadi latihan kita. Apakah ada pertanyaan?</h3>
        <p class="lead">Silahkan klik tombol <strong>MULAI</strong> untuk mulai mengerjakan soal sebenarnya.
        </p>
        <p class="text-center my-5">
            <button class="btn btn-success btn-lg" id="btnMulaiSoal1">MULAI</button>
        </p>
    </div>`);

    $("#latihan1Selesai").fadeIn();
    $("#btnMulaiSoal1").click(event => {
        $("#latihan1Selesai").fadeOut();

        showSoal1Petunjuk();
    });
}

const latihan1Manifest = [
    {
        title : 'PENJEPIT KABEL',
        url : 'assets/img/aut/latihan1.jpg',
        caption : 'Latihan1'
    },
    {
        title : 'PENYANGGA KABEL KOMPUTER',
        url : 'assets/img/aut/latihan2.jpg',
        caption : 'Latihan2'
    },
    {
        title : 'STAND HANDPHONE',
        url : 'assets/img/aut/latihan3.jpg',
        caption : 'Latihan3'
    },
    {
        title : 'PEMBATAS BUKU',
        url : 'assets/img/aut/latihan4.jpg',
        caption : 'Latihan4'
    },
    {
        title : 'PEMBUKA BOTOL',
        url : 'assets/img/aut/latihan5.jpg',
        caption : 'Latihan5'
    },
]

const showLatihan1 = async () => {
    setProgress('latihan1Gambar');
    if(mode != 3){
        $("#root").html(
            `<div class="text-center" id="latihan1Root">
                <h1 id="latihan1Title" class="my-5" style="display:none; font-size: 60px; margin-top:150px !important"></h1>
                <img src="" style="display:none; margin-top:20px !important" alt="Latihan1" id="latihan1Img" height="500px">
            </div>`);
        
        for(var i = 0; i < latihan1Manifest.length; i++){
            $("#latihan1Title").html(latihan1Manifest[i].title);
    
            // Mode 0
            if(mode == 0){
                $("#latihan1Img").attr('src', latihan1Manifest[i].url)
            }
            // Mode 1
            if(mode == 1){
                $("#latihan1Img").attr('src', '../' + latihan1Manifest[i].url) 
            }
            $("#latihan1Title").fadeIn(500);
            await sleep(2000)
            $("#latihan1Title").fadeOut(10);
            await sleep(20)
            $("#latihan1Img").fadeIn(500);
            await sleep(2000)
            $("#latihan1Img").fadeOut(10);
            await sleep(20)
        }
    }
    showLatihan1Quiz()
}

const showLatihan1Quiz = async () => {
    setProgress('latihan1Quiz');
    $('#root').html(`
    <div class="text-center" id="quizLatihan1" style="display:none">
        <h2 class="lead">Sebutkan fungsi lain dari Paper clip (selain sebagai penjepit kertas)</h2>
        <img src="${loc}assets/img/aut/paper clipt.png" alt="Latihan 1 Soal" class="img-fluid">
        <hr>
        <div class="row align-content-justify d-flex justify-content-center" >
            <div class="col-12 col-sm-12 col-md-6 ">
                <ol id="formQuizLatihan1">
                </ol>
                <button class="btn btn-success btn-lg btn-block" type="submit" id="btnSelesaiLatihan">Selesai</button>
            </div>
        </div>
    </div>`)

    for(var i = 1; i <= 30; i++){
        $("#formQuizLatihan1").append(`<li>
            <input type="text" id="inputLatihan1-${i}" class="form-control">
        </li>`)
    }

    $("#quizLatihan1").fadeIn(500);

    // Ganti Timeout sesuai dengan req
    var quizLatihan1Timeout = 60;
    var varInterval = setInterval(() => {
        console.log(quizLatihan1Timeout);
        if(quizLatihan1Timeout <= 0){
            clearInterval(varInterval);
            showLatihan1Selesai();
        }
        quizLatihan1Timeout--;
    }, 1000)
    $("#btnSelesaiLatihan").click(() => {
        clearInterval(varInterval);
        showLatihan1Selesai();
    });
}
