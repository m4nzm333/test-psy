const showSoal4Petunjuk = async () => {
    setProgress('soal4Petunjuk');
    $("#root").html(`<div style="display:none" id="petunjukSoal4" class="text-center my-5">
        <h4>Dalam beberapa saat, tayangan gambar dan kata-kata akan dimulai <br><br>
        INGAT!! Tayangan ini akan membantu anda dalam mengerjakan setiap soal.</h4>
    </div>`);

    $("#petunjukSoal4").fadeIn();

    for(var i = 7; i > 0; i--){
        console.log(i);
        await sleep(1000);
    }
    $("#petunjukSoal4").fadeOut();

    showSoal4();
}

const soal4Manifest = [
    {
        title : 'PIALA',
        url : 'assets/img/rat/gambar1.jpg'
    },
    {
        title : 'SEKOLAH',
        url : 'assets/img/rat/gambar2.jpg'
    },
    {
        title : 'KEMAH',
        url : 'assets/img/rat/gambar3.jpg'
    },
    {
        title : 'LILIN',
        url : 'assets/img/rat/gambar4.jpg'
    },
    {
        title : 'TAS',
        url : 'assets/img/rat/gambar5.jpg'
    },
    {
        title : 'BUKU',
        url : 'assets/img/rat/gambar6.jpg'
    },
    {
        title : 'BUTA',
        url : 'assets/img/rat/gambar7.jpg'
    },
    {
        title : 'ROBOT',
        url : 'assets/img/rat/gambar8.jpg'
    },
    {
        title : 'EMAS',
        url : 'assets/img/rat/gambar9.jpg'
    },
    {
        title : 'HARI',
        url : 'assets/img/rat/gambar10.jpg'
    },
    {
        title : 'GULA',
        url : 'assets/img/rat/gambar11.jpg'
    },
    {
        title : 'KARDUS',
        url : 'assets/img/rat/gambar12.jpg'
    },
    {
        title : 'API',
        url : 'assets/img/rat/gambar13.jpg'
    },
    {
        title : 'HUJAN',
        url : 'assets/img/rat/gambar14.jpg'
    },
    {
        title : 'HUTAN',
        url : 'assets/img/rat/gambar15.jpg'
    },
    {
        title : 'MADU',
        url : 'assets/img/rat/gambar16.jpg'
    },
    {
        title : 'KURSI',
        url : 'assets/img/rat/gambar17.jpg'
    },
    {
        title : 'TAGIHAN',
        url : 'assets/img/rat/gambar18.jpg'
    },
    {
        title : 'MENONTON',
        url : 'assets/img/rat/gambar19.jpg'
    },
    {
        title : 'PINTU',
        url : 'assets/img/rat/gambar20.jpg'
    },
    {
        title : 'PERAHU',
        url : 'assets/img/rat/gambar21.jpg'
    },
    {
        title : 'PENYAKIT',
        url : 'assets/img/rat/gambar22.jpg'
    },
    {
        title : 'ES',
        url : 'assets/img/rat/gambar23.jpg'
    },
    {
        title : 'COKLAT',
        url : 'assets/img/rat/gambar24.jpg'
    },
    {
        title : 'TOPI',
        url : 'assets/img/rat/gambar25.jpg'
    }
]

const showSoal4 = async () => {
    setProgress('soal4Gambar');
    $("#root").html(
        `<div class="text-center" id="soal4Root">
            <h1 id="soal4Title" class="my-5" style="display:none; font-size: 60px; margin-top:150px !important"></h1>
            <img src="" style="display:none; margin-top:20px !important" alt="Soal4" id="soal4Img" height="500px">
        </div>`);
    
    for(var i = 0; i < soal4Manifest.length; i++){
        $("#soal4Title").html(soal4Manifest[i].title);
        $("#soal4Img").attr('src', soal4Manifest[i].url)
        $("#soal4Title").fadeIn(500);
        await sleep(2000)
        $("#soal4Title").fadeOut(10);
        await sleep(30)
        $("#soal4Img").fadeIn(500);
        await sleep(2000)
        $("#soal4Img").fadeOut(10);
        await sleep(30)
    }

    showSoal4Siap();
}

const showSoal4Siap = async () => {
    setProgress('soal4Siap');
    $("#root").html(`<div style="display:none; margin-top:200px" id="siapSoal4" class="text-center">
    <h4 class="my-5">Tayangan kata-kata dan gambar telah selesai. <br><br>
    INGAT!! Beberapa saat lagi, akan muncul soal dan kolom untuk mengerjakan soal.</h4>
</div>`);

    $("#siapSoal4").fadeIn();

    for(var i = 10; i > 0; i--){
        console.log(i);
        await sleep(1000);
    }
    $("#siapSoal4").fadeOut();

    showSiap2Soal4();
}

const showSiap2Soal4 = async () => {
    setProgress('soal4Siap2');
    $("#root").html(`<div style="display:none; margin-top:200px" id="siapSoal4" class="text-center">
    <p class="lead text-justify my-5">Tuliskan satu kata yang mewakili ketiga kata. Sebagai contoh: <strong>MERAH/REDUP/BELAJAR.</strong> Jawaban yang benar adalah <strong>LAMPU</strong>, karena apabila <strong>BELAJAR</strong> dengan <strong>LAMPU yang REDUP</strong> akan membuat mata menjadi <strong>MERAH</strong>.
    INGAT!! Akan ada batasan waktu tertentu sehingga kerjakan secepat dan setepat mungkin.
    </p>
    <p class="lead text-center">Klik <strong>SAYA SIAP</strong> untuk memulai.</p>
    <button class="btn btn-success btn-lg" id="btnSiapSoal4">SAYA SIAP</button>
</div>`);

    $("#siapSoal4").fadeIn();
    $("#btnSiapSoal4").click(() => {
        $("#siapSoal4").fadeOut();

        showSoal4Daftar();
    });
}

// Daftar Soal 4
const soal4List = [
    'kue/snikers/belgia',
    'cream/teh/batu',
    'cacat/cacar/menular',
    'sungai/kertas/kecil',
    'bioskop/tv/acara',
    'rupiah/post/pajak',
    'lipat/bersantai/power',
    'manis/lebah/selai',
    'tropis/hujan/hijau',
    'air/langit/basah',
    'merah/panas/amarah',
    'tebu/jawa/kristal',
    'lahir/senin/terbaik',
    'berkilau/ikan/mahal',
    'gelap/permanen/mata',
    'rak/ilmu/kertas',
    'punggung/rajut/karung',
    'cahaya/kue ulangtahun/stick',
    'hutan/berwisata/tenda',
    'SMA/di rumah/wilayah'
]

const showSoal4Daftar = async () => {
    setProgress('soal4Gambar');
    $("#root").html(`<div style="display:none" id="tableSoal4">
        <table class="table table-dark table-bordered table-striped" width="600px">
            <thead class="text-center">
                <th width="20px">No</th>
                <th>Soal</th>
                <th>Jawaban</th>
            </thead>
            <tbody id="daftarSoal4">
                
            </tbody>
        </table>

        <p class="text-center">
            <button class="btn btn-success btn-lg" id="btnSoal4Selesai">Selesai</button>
        </p>
    </div>`)

    soal4List.forEach((item, index) => {
        $("#daftarSoal4").append(`<tr>
            <td>${index+1}</td>
            <td>${item}</td>
            <td><input type="text" id="inputSoal4-${index+1}" class="form-control" placeholder="Jawaban"></td>
        </tr>`)
    })

    $("#tableSoal4").fadeIn()

    var quizSoal4Timeout = 240
    var varInterval = setInterval(() => {
        console.log(quizSoal4Timeout);
        if(quizSoal4Timeout <= 0){
            clearInterval(varInterval);
            saveSoal4Jawaban();
        }
        quizSoal4Timeout--;
    }, 1000)
    $("#btnSoal4Selesai").click(() => {
        clearInterval(varInterval);
        saveSoal4Jawaban();
    });
}

const showSoal4Selesai = () => {
    setProgress('soal4Selesai');
    $("#root").html(`<div id="soal4Selesai" style="display:none">
        <h3 class="text-center my-5">Semua soal pada Remote associates test sudah selesai dikerjakan.
        </h3>
        <h3 class="text-center my-5">Dengan demikian, rangkaian tes sudah selesai. Terima kasih atas partsipasi anda. <br> Semoga hari anda menyenangkan.
        </h3>
        <p class="text-center"><button class="btn btn-success btn-lg" id="btnSoal4Selesai">SELESAI</button></p>
    </div>`)
    $("#soal4Selesai").fadeIn();
    $("#btnSoal4Selesai").click(() => {
        $("#soal4Selesai").fadeOut();
        clearAllLocalStorage();
        showSelamatDatang();
    });
}

const saveSoal4Jawaban = async () => {
    // Get Jawaban Soal 4
    var jawaban4 = {}; 
    for(var i = 1; i <= soal4List.length; i++){
        jawaban4[`${i}`] = $(`#inputSoal4-${i}`).val()
    }
    console.log(idResponden);
    db.collection('responden').doc(getIdResponden()).set({
        ratSoal1 : jawaban4
    }, {merge : true})
    .then(() => {
        $("#quizSoal4").fadeOut(500);
        showSoal4Selesai();
    })
}