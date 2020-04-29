// Untuk delay pake sycc
var sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Firebase Init
const firebaseConfig = {
    apiKey: "AIzaSyChdSTHK2RqIZNo0q4dKMhWq3swIknVnMY",
    authDomain: "test-psy-b62ba.firebaseapp.com",
    databaseURL: "https://test-psy-b62ba.firebaseio.com",
    projectId: "test-psy-b62ba",
    storageBucket: "test-psy-b62ba.appspot.com",
    messagingSenderId: "848203803533",
    appId: "1:848203803533:web:77a1c100688dd81e672bc4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// DataResponden
var responden = {}
var idResponden = '';
// Debug
// var idResponden = 'e25JYhjqa6B5wGOsJqsc';
// const getResponden = async () => {
//     const snapshot = await db.collection('responden').doc('e25JYhjqa6B5wGOsJqsc').get();
//     const data = snapshot.data();
//     return data;
// }


const showSelamatDatang = async () => {
    $("#root").html(`<div id="selamatDatang" style="display:none">
        <p class="lead text-justify my-5"><strong>Selamat Datang!</strong> Untuk beberapa menit kedepan anda akan mengerjakan dua bentuk tes. Tes pertama bernama Alternate uses test dan tes kedua bernama Remote associates test. Setiap tes telah disediakan petunjuk yang akan membantu anda selama tes berlangsung. Sebelum memulai, silahkan duduk senyaman mungkin dan isilah biodata anda terlebih dahulu.</p>
        <form id="formSelamatDatang">
            <div class="row d-flex justify-content-center">
                <div class="col-sm-12 col-md-6 col-lg-5 ">
                    <div class="form-group">
                        <input type="text" class="form-control" id="inputNama" placeholder="Nama Lengkap" required>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="inputDivisi" placeholder="Divisi" required>
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" id="inputUsia" placeholder="Usia" required>
                    </div>
                    <div class="form-group">
                        <select class="form-control" id="inputJenisKelamin" required>
                            <option value="" selected disabled>--- Pilih Jenis Kelamin ---</option>
                            <option value="L">Laki-Laki</option>
                            <option value="P">Perempuan</option>
                        </select>
                    </div>
                    <p class="lead text-justify"><i>Dengan ini saya bersedia untuk mengikuti tes hingga selesai.</i></p>
                    <button class="btn btn-success btn-block btn-lg" type="submit">Ya, Saya setuju.</button>
                </div>
            </div>
        </form>
    </div>`);

    $("#selamatDatang").fadeIn();
    $("#formSelamatDatang").submit(event => {
        event.preventDefault();
        $("#selamatDatang").fadeOut();

        responden = {
            'nama': $("#inputNama").val(),
            'divisi': $("#inputDivisi").val(),
            'usia': $("#inputUsia").val(),
            'jenisKelamin': $("#inputJenisKelamin").val()
        }

        // Insert Data responded ke firestore
        db.collection("responden").add(responden).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            idResponden = docRef.id;
            // Localstorage
            setIdResponden(idResponden);
            setProgress('portal1');
            showPetunjukPortal1();
        })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    });
}

const showPetunjukPortal1 = () => {
    $("#root").html(`<div id="petunjukPortal1" style="display:none">
        <h4 class="text-left my-5">PORTAL 1</h5>
        <h2 class="text-center">PETUNJUK TUGAS ALTERNATE USES TEST</h2>
        <p class="lead text-justify">Pada tes ini, anda disajikan beberapa buah benda dan setiap benda memiliki fungsinya masing-masing. Sebagai contoh: Koran berfungsi untuk dibaca. Namun bukan itu yang kami minta. Anda ditantang untuk memikirkan fungsi lainnya. Sebagai contoh, fungsi lain dari Koran adalah menghidupkan api, membungkus sampah, ataupun sebagai alat pemukul.</p>
        <p class="lead text-justify">Setiap soal akan dimulai dengan tayangan berupa kata-kata dan gambar secara cepat dan bergantian. Tayangan ini akan membantu anda dalam mengerjakan setiap soal. Jadi mohon untuk diperhatikan secara seksama.</p>
        <strong class="lead">PENTING ANDA PERHATIKAN:</strong>
        <ul>
            <li>Fungsi yang anda tuliskan tidak boleh sama dengan benda lainnya</li>
            <li>Berikan jawaban sebanyak-banyak di dalam kolom yang telah disediakan</li>
            <li>Setiap kolom untuk satu jawaban</li>
            <li>Akan ada batasan waktu tertentu untuk setiap soalnya sehingga kerjakan secepat dan setepat mungkin</li>
            <li>Portal akan berpindah secara otomatis ketika waktu anda telah habis</li>
        </ul>
        <p class="lead text-center"><strong>Jika ada pertanyaan, silahkan ditanyakan.</strong></p>
        <p class="lead text-center">Apabila  tidak ada pertanyaan, silahkan pencet tombol <strong>Aku Mau Latihan</strong>.</p>
        <p class="text-center"><button class="btn btn-lg btn-success btn-block" id="btnPortal1Latihan">Aku Mau Latihan</button></p>
    </div>`);

    $("#petunjukPortal1").fadeIn();
    $("#btnPortal1Latihan").click(() => {
        $("#petunjukPortal1").fadeOut();
        showLatihan1Petunjuk();
    });
}

// Mode 0
const showSelesaiPortal1 = async () => {
    $("#root").html(`<div id="selesaiPortal1" style="display:none">
        <p class="lead text-center my-5">Semua soal pada Alternate uses test sudah selesai dikerjakan.<br>Apabila anda sudah siap, kita akan berpindah ke Remote associates test. Silahkan klik tombol <strong>Saya Siap.</strong>
        </p>
        <p class="text-center">
            <button class="btn btn-success btn-lg" id="btnSiapPortal2">SAYA SIAP</button>
        </p>
    </div>`)

    $("#selesaiPortal1").fadeIn();
    $("#btnSiapPortal2").click(() => {
        $("#selesaiPortal1").fadeOut();
        showPetunjukPortal2();
    });
}
// Mode 1
const showSelesaiPortal1Alt = () => {
    setProgress('portal1SelesaiAlt');
    $("#root").html(`<div id="portal1Selesai" style="display:none">
        <h3 class="text-center my-5">Semua soal pada Alternate uses test sudah selesai dikerjakan.</h3>
        <h3 class="text-center my-5">Dengan demikian, rangkaian tes sudah selesai. Terima kasih atas partsipasi anda. <br> Semoga hari anda menyenangkan.
        </h3>
        <p class="text-center"><button class="btn btn-success btn-lg" id="btnPortal1Selesai">SELESAI</button></p>
    </div>`)
    $("#portal1Selesai").fadeIn();
    $("#btnPortal1Selesai").click(() => {
        $("#portal1Selesai").fadeOut();
        clearAllLocalStorage();
        showSelamatDatang();
    });
}

const showPetunjukPortal2 = async () => {
    $("#root").html(`<div id="petunjukPortal2" style="display:none">
        <h4 class="text-left my-5">PORTAL 2</h5>
        <h2 class="text-center">PETUNJUK TUGAS REMOTE ASSOCIATES TEST</h2>
        <p class="lead text-justify">Pada tes ini, anda disajikan tiga buah kata yang memiliki keterkaitan tertentu. Anda ditantang untuk menyimpulkan satu kata yang tepat yang mewakili tiga kata tersebut. Sebagai contoh: MERAH/REDUP/BELAJAR. Jawaban yang benar adalah LAMPU, karena apabila BELAJAR dengan LAMPU yang REDUP akan membuat mata menjadi MERAH.</p>
        <p class="lead text-justify">Soal akan terdiri dari 20 butir dan sebelum soal ditampilkan, kami akan menyajikan tayangan berupa kata-kata dan gambar secara cepat dan bergantian. Tayangan ini akan membantu anda dalam mengerjakan setiap soal. Jadi mohon untuk diperhatikan secara seksama.</p>
        <strong class="lead">PENTING ANDA PERHATIKAN:</strong>
        <ul>
            <li>Jawaban hanya satu kata saja</li>
            <li>Soal akan disajikan sekaligus dalam satu tampilan</li>
            <li>Setelah soal akan disediakan kolom jawaban</li>
            <li>Akan ada batasan waktu tertentu dalam pengerjaannya sehingga kerjakan secepat dan setepat mungkin</li>
            <li>Portal akan berpindah secara otomatis ketika waktu anda telah habis</li>
            <li>Kami tidak menyediakan latihan untuk tugas ini</li>
        </ul>
        <p class="lead text-center"><strong>Jika ada pertanyaan, silahkan ditanyakan.</strong></p>
        <p class="lead text-center">Apabila  tidak ada pertanyaan, silahkan pencet tombol <strong>MULAI</strong>.</p>
        <button class="btn btn-lg btn-success btn-block" id="btnMulaiPortal2">MULAI</button>
    </div>`)
    $("#petunjukPortal2").fadeIn();
    $("#btnMulaiPortal2").click(() => {
        $("#petunjukPortal2").fadeOut();
        showSoal4Petunjuk();
    });
}

/* 
======================
Jalan Pertama
======================
*/
if (getIdResponden() != null) {
    idResponden = getIdResponden();
    if (getProgress() != null) {
        switch (getProgress()) {
            case 'portal1':
                showPetunjukPortal1();
                break;
            
            case 'portal1SelesaiAlt':
                showSelesaiPortal1Alt();
                break;

            // Latihan
            case 'latihan1Petunjuk':
                showLatihan1Petunjuk();
                break;
            case 'latihan1Gambar':
                showLatihan1();
                break;
            case 'latihan1Quiz':
                showLatihan1Quiz();
                break;
            case 'latihan1Selesai':
                showLatihan1Selesai();

                break;
            // Soal 1
            case 'soal1Petunjuk':
                showSoal1Petunjuk();
                break;
            case 'soal1Gambar':
                showSoal1();
                break;
            case 'soal1Quiz':
                showSoal1Quiz();
                break;
            case 'soal1Selesai':
                showSoal1Selesai();
                break;

            // Soal 2     
            case 'soal2Petunjuk':
                showSoal2Petunjuk();
                break;
            case 'soal2Gambar':
                showSoal2();
                break;
            case 'soal2Quiz':
                showSoal2Quiz();
                break;
            case 'soal2Selesai':
                showSoal2Selesai();
                break;

            // Soal 3     
            case 'soal3Petunjuk':
                showSoal3Petunjuk();
                break;
            case 'soal3Gambar':
                showSoal3();
                break;
            case 'soal3Quiz':
                showSoal3Quiz();
                break;
            case 'soal3Selesai':
                showSoal3Selesai();
                break;
            
            // Portal2
            case 'portal2':
                showPetunjukPortal2();
                break;
            
            // Soal 4 (RAT)
            case 'soal4Petunjuk':
                showSoal4Petunjuk();
                break;
            case 'soal4Siap':
                showSoal4Siap();
                break;
            case 'soal4Siap2':
                showSiap2Soal4();
                break;
            case 'soal4Gambar':
                showSoal4();
                break;
            case 'soal4Quiz':
                showSoal4Quiz();
                break;
            case 'soal4Selesai':
                showSoal4Selesai();
                break;
        }
    }
} else {
    showSelamatDatang()
}