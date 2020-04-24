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

respondenJSON = []



const showLoading = () => {
    $("#modalLoading").modal({
        show: true,
        keyboard: false,
        backdrop: 'static'
    })
}

const hideLoading = () => {
    $("#modalLoading").modal('hide')
}


$("#btnHapus").click(() => {
    clearData()
})

const clearData = async() => {
    showLoading()
    const respondensRef = db.collection('responden')
    const respondensDocs = await respondensRef.get();
    for (responden of respondensDocs.docs) {
        // console.log(responden.id);
        var respondenRef = await respondensRef.doc(responden.id).delete()
    }
    location.reload()
}


const getAllResponden = async () => {
    showLoading()
    const respondensRef = db.collection('responden')
    const respondensDocs = await respondensRef.get();
    for (responden of respondensDocs.docs) {
        // console.log(responden.id);
        var respondenRef = await respondensRef.doc(responden.id).get()
        var respondenData = respondenRef.data()
        respondenJSON.push(respondenData)
    }
    hideLoading()
    $('#tableResponden').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        data: respondenJSON,
        "columns": [
            { "data": "nama", },
            { "data": "divisi" },
            { "data": "divisi" },
            { "data": "jenisKelamin" },
            {
                "data": "autSoal1",
                "render": (data, type, row, meta) => {
                    if (data != null) {
                        var returnData = '<ol>'
                        data.forEach(element => {
                            returnData = returnData + `<li>${element}</li>`;
                        });
                        returnData = returnData + `</ol>`
                        return returnData;
                    };
                    return '';
                }
            },
            {
                "data": "autSoal2",
                "render": (data, type, row, meta) => {
                    if (data != null) {
                        var returnData = '<ol>'
                        data.forEach(element => {
                            returnData = returnData + `<li>${element}</li>`;
                        });
                        returnData = returnData + `</ol>`
                        return returnData;
                    };
                    return '';
                }
            },
            {
                "data": "autSoal3",
                "render": (data, type, row, meta) => {
                    if (data != null) {
                        var returnData = '<ol>'
                        data.forEach(element => {
                            returnData = returnData + `<li>${element}</li>`;
                        });
                        returnData = returnData + `</ol>`
                        return returnData;
                    };
                    return '';
                }
            },
            {
                "data": "ratSoal1",
                "render": (data, type, row, meta) => {
                    if (data != null) {
                        var returnData = '<ol>'
                        for (var i = 1; i <= 20; i++) {
                            returnData = returnData + `<li>${data[i]}</li>`;
                        }
                        returnData = returnData + `</ol>`
                        return returnData;
                    }
                    return null;
                }
            }
        ]
    });
}

getAllResponden();

