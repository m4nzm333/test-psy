
const showSoal3Petunjuk = async () => {
    setProgress('soal3Petunjuk');
    $("#root").html(`<div style="display:none; margin-top:200px" id="petunjukSoal3" >
        <h1 class="text-center my-5">Soal 3</h1>
        <p class="lead my-5 text-center" style="font-size:20px">Dalam beberapa saat, tayangan gambar dan kata-kata akan dimulai.</p>
    </div>`);

    $("#petunjukSoal3").fadeIn();

    for(var i = 7; i > 0; i--){
        console.log(i);
        await sleep(1000);
    }
    $("#petunjukSoal3").fadeOut();

    showSoal3();
}

const showSoal3Selesai = async () => {
    setProgress('soal3Selesai');
    $("#root").html(`<div style="display:none; margin-top:200px" id="selesaiSoal3" >
        <h4 class="text-center my-5">Tayangan kata-kata dan gambar telah selesai. <br>
        Beberapa saat lagi, akan muncul soal dan kolom untuk mengerjakan soal
        </h4>
    </div>`);

    $("#selesaiSoal3").fadeIn();
    for(var i = 10; i >= 0; i--){
        console.log(i);
        await sleep(1000);
    }
    $("#selesaiSoal3").fadeOut();

    showSoal3Quiz();
}

const soal3Manifest = [
    {
        title : 'BIDAK TIKTAKTOE',
        url : 'assets/img/aut/kancing1.jpg'
    },
    {
        title : 'BIDAK ENGKLENG',
        url : 'assets/img/aut/kancing2.jpg'
    },
    {
        title : 'PICK GITAR',
        url : 'assets/img/aut/kancing3.jpg'
    },
    {
        title : 'KOIN KARAMBOL',
        url : 'assets/img/aut/kancing4.jpg'
    },
    {
        title : 'BIDAK CATUR',
        url : 'assets/img/aut/kancing5.jpg'
    },
    {
        title : 'MATA BONEKA',
        url : 'assets/img/aut/kancing6.png'
    },
    {
        title : 'GELANG',
        url : 'assets/img/aut/kancing7.jpg'
    },
    {
        title : 'PENGUNCI BUKU',
        url : 'assets/img/aut/kancing8.jpg'
    },
    {
        title : 'KALUNG',
        url : 'assets/img/aut/kancing9.jpg'
    },
    {
        title : 'BROS',
        url : 'assets/img/aut/kancing10.jpg'
    },
    {
        title : 'ANTING',
        url : 'assets/img/aut/kancing11.jpg'
    },
    {
        title : 'TASBIH',
        url : 'assets/img/aut/kancing12.jpg'
    },
    {
        title : 'TIRAI',
        url : 'assets/img/aut/kancing13.jpg'
    },
    {
        title : 'BUKET BUNGA',
        url : 'assets/img/aut/kancing14.jpg'
    },
    {
        title : 'HIASAN SEPATU',
        url : 'assets/img/aut/kancing15.jpg'
    },
]

const showSoal3 = async () => {
    setProgress('soal3Gambar');
    $("#root").html(
        `<div class="text-center" id="soal3Root">
            <h1 id="soal3Title" class="my-5" style="display:none; font-size: 60px; margin-top:150px !important"></h1>
            <img src="" style="display:none; margin-top:20px !important" alt="Soal " id="soal3Img" height="500px">
        </div>`);
    
    for(var i = 0; i < soal3Manifest.length; i++){
        $("#soal3Title").html(soal3Manifest[i].title);
        // Mode 0
        if(mode == 0){
            $("#soal3Img").attr('src', soal3Manifest[i].url)
        }
        // Mode 1
        if(mode == 1){
            $("#soal3Img").attr('src', '../' + soal3Manifest[i].url) 
        }
        $("#soal3Title").fadeIn(500);
        await sleep(2000)
        $("#soal3Title").fadeOut(10);
        await sleep(20)
        $("#soal3Img").fadeIn(500);
        await sleep(2000)
        $("#soal3Img").fadeOut(10);
        await sleep(20)
    }

    showSoal3Selesai();
}

const showSoal3Quiz = async () => {
    setProgress('soal3Quiz');
    $('#root').html(`
    <div class="text-center" id="quizSoal3" style="display:none">
        <h2 class="lead">Sebutkan fungsi lain dari kancing <br>(selain digunakan untuk mengikat barang)</h2>
        <img src="assets/img/aut/kancing.png" alt="Latihan 1 Soal" class="img-fluid" width="400px">
        <hr>
        <div class="row align-content-justify d-flex justify-content-center" >
            <div class="col-12 col-sm-12 col-md-6 ">
                <ol id="formQuizSoal3">
                </ol>
                <button class="btn btn-success btn-lg btn-block" id="btnSoal3Selesai">Selesai</button>
            </div>
        </div>
    </div>`)

    for(var i = 1; i <= 100; i++){
        $("#formQuizSoal3").append(`<li>
        <input type="text" id="inputSoal3-${i}" class="form-control">
    </li>`)
    }

    $("#quizSoal3").fadeIn(500);

    // Ganti Timeout sesuai dengan req
    var quizSoal3Timeout = 240;
    var varInterval = setInterval(() => {
        console.log(quizSoal3Timeout);
        if(quizSoal3Timeout <= 0){
            clearInterval(varInterval);
            saveSoal3Jawaban()
        }
        quizSoal3Timeout--
    }, 1000)
    $("#btnSoal3Selesai").click(() => {
        clearInterval(varInterval);
        saveSoal3Jawaban()
    });
}

const saveSoal3Jawaban = async () => {
    // Get Jawaban Soal 3
    var jawaban3 = []; 
    for(var i = 1; i <= 100; i++){
        if($(`#inputSoal3-${i}`).val() != ''){
            jawaban3.push($(`#inputSoal3-${i}`).val());
        }
    }
    console.log(idResponden);
    db.collection('responden').doc(getIdResponden()).set({
        autSoal3 : jawaban3
    }, {merge : true})
    .then(() => {
        $("#quizSoal3").fadeOut(500);

        if(mode == 0){
            showSelesaiPortal1();
        } else {
            showSelesaiPortal1Alt();
        }
        
    })
}