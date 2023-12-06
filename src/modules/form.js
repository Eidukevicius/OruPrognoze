const form = ()=>{
    return `
    <div class = "form-group">
        <input class="form-control city" list="places" placeholder="Choose location...">
    </div>
    <div class ="form-group">
        <button type="button" class="btn btn-info loadButton">Rodyti prognoze</button>
    </div>
    <div class = "form-group">
        <datalist id="places">
        </datalist>
    </div>
    `
}
export default form