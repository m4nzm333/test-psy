
const showSoal1Petunjuk = async () => {
    setProgress('soal1Petunjuk');
    $("#root").html(`<div style="display:none; margin-top:200px" id="petunjukSoal1" >
        <h1 class="text-center my-5">Soal 1</h1>
        <p class="lead my-5 text-center" style="font-size:20px">Dalam beberapa saat, tayangan gambar dan kata-kata akan dimulai. <strong>INGAT!!</strong> Tayangan ini akan membantu anda dalam mengerjakan soal.</p>
    </div>`);

    $("#petunjukSoal1").fadeIn();

    for(var i = 7; i >= 0; i--){
        console.log(i);
        await sleep(1000);
    }
    $("#petunjukSoal1").fadeOut();

    showSoal1();
}

const showSoal1Selesai = async () => {
    setProgress('soal1Selesai');
    $("#root").html(`<div style="display:none; margin-top:200px" id="selesaiSoal1" >
        <h4 class="text-center my-5">Tayangan kata-kata dan gambar telah selesai. <br>
        Beberapa saat lagi, akan muncul soal dan kolom untuk mengerjakan soal
        </h4>
    </div>`);

    $("#selesaiSoal1").fadeIn();
    for(var i = 10; i >= 0; i--){
        console.log(i);
        await sleep(1000);
    }
    $("#selesaiSoal1").fadeOut();

    showSoal1Quiz();
}

const soal1Manifest = [
    {
        title : 'PENYANGGA PINTU',
        url : 'assets/img/aut/sepatu1.jpg'
    },
    {
        title : 'MELEMPAR',
        url : 'assets/img/aut/sepatu2.jpg'
    },
    {
        title : 'MEMUKUL',
        url : 'assets/img/aut/sepatu3.jpg'
    },
    {
        title : 'ALAS DUDUK',
        url : 'assets/img/aut/sepatu4.jpg'
    },
    {
        title : 'POT BUNGA',
        url : 'assets/img/aut/sepatu5.jpg'
    },
    {
        title : 'TEMPAT PENSIL',
        url : 'assets/img/aut/sepatu6.jpg'
    },
    {
        title : 'TEMPAT BINGKISAN',
        url : 'assets/img/aut/sepatu7.jpg'
    },
    {
        title : 'MEMBUAT GAMBAR',
        url : 'assets/img/aut/sepatu8.jpg'
    },
    {
        title : 'MEMBUAT POLA',
        url : 'assets/img/aut/sepatu9.jpg'
    },
    {
        title : 'HIASAN DINDING',
        url : 'assets/img/aut/sepatu10.jpg'
    },
    {
        title : 'PENDETEKSI GERAKAN DI JALAN',
        url : 'assets/img/aut/sepatu11.jpg'
    },
    {
        title : 'AKUARIUM',
        url : 'assets/img/aut/sepatu12.jpg'
    },
    {
        title : 'PENERANG  DI KEGELAPAN',
        url : 'assets/img/aut/sepatu13.jpg'
    },
    {
        title : 'PENDINGIN KAKI',
        url : 'assets/img/aut/sepatu14.jpg'
    },
    {
        title : 'TEMPAT MANTEL HUJAN',
        url : 'assets/img/aut/sepatu15.jpg'
    },
]

const showSoal1 = async () => {
    setProgress('soal1Gambar');
    $("#root").html(
        `<div class="text-center" id="soal1Root">
            <h1 id="soal1Title" class="my-5" style="display:none; font-size: 60px; margin-top:150px !important"></h1>
            <img src="" style="display:none; margin-top:20px !important" alt="Latihan1" id="soal1Img" height="500px">
        </div>`);
    
    for(var i = 0; i < soal1Manifest.length; i++){
        $("#soal1Title").html(soal1Manifest[i].title);
        // Mode 0
        if(mode == 0){
            $("#soal1Img").attr('src', soal1Manifest[i].url)
        }
        // Mode 1
        if(mode == 1){
            $("#soal1Img").attr('src', '../../' + soal1Manifest[i].url) 
        }
        
        $("#soal1Title").fadeIn(500);
        await sleep(2000)
        $("#soal1Title").fadeOut(10);
        await sleep(20)
        $("#soal1Img").fadeIn(500);
        await sleep(2000)
        $("#soal1Img").fadeOut(10);
        await sleep(20)
    }

    showSoal1Selesai()
}

const showSoal1Quiz = async () => {
    setProgress('soal1Quiz');
    $('#root').html(`
    <div class="text-center" id="quizSoal1" style="display:none">
        <h2 class="lead">Sebutkan fungsi lain dari SEPATU (selain sebagai alas/pelindung kaki) </h2>
        <img src="${loc}assets/img/aut/sepatu.jpg" alt="Latihan 1 Soal" class="img-fluid">
        <hr>
        <div class="row align-content-justify d-flex justify-content-center" >
            <div class="col-12 col-sm-12 col-md-6 ">
                <ol id="formQuizSoal1">
                </ol>
                <button class="btn btn-success btn-lg btn-block" id="btnSoal1Selesai">Selesai</button>
            </div>
        </div>
    </div>`)

    for(var i = 1; i <= 100; i++){
        $("#formQuizSoal1").append(`<li>
            <input type="text" id="inputSoal1-${i}" class="form-control">
        </li>`)
    }

    $("#quizSoal1").fadeIn(500);

    // Ganti Timeout sesuai dengan req
    var quizSoal1Timeout = 240;
    var varInterval = setInterval(() => {
        console.log(quizSoal1Timeout);
        if(quizSoal1Timeout <= 0){
            clearInterval(varInterval);
            saveSoal1Jawaban();
        }
        quizSoal1Timeout--
    }, 1000)
    $("#btnSoal1Selesai").click(() => {
        clearInterval(varInterval);
        saveSoal1Jawaban();
    });
}


const saveSoal1Jawaban = async () => {
    // Get Jawaban Soal 1
    var jawaban1 = []; 
    for(var i = 1; i <= 100; i++){
        if($(`#inputSoal1-${i}`).val() != ''){
            jawaban1.push($(`#inputSoal1-${i}`).val());
        }
    }
    console.log(idResponden);
    db.collection('responden').doc(getIdResponden()).set({
        autSoal1 : jawaban1
    }, {merge : true})
    .then(() => {
        $("#quizSoal1").fadeOut(500);
        showSoal2Petunjuk();
    })
}