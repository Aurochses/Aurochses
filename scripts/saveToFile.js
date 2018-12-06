function saveToFile(inputElementId, filename) {
    var text = $(`#${inputElementId}`).val();

    var blob = new Blob(
        [text],
        {
            type: "text/plain;charset=utf-8"
        }
    );

    saveAs(blob, filename);
}