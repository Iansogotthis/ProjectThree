export default function Form() {
    return(
    <>
    <h1>Form</h1>


      <form>
        <label>NAME</label>
        <input name="name" />
        <label>EMOTION</label>
        <select name="emotion">
          <option value="😁">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😠">Angry</option>
        </select>
      </form>
 
     </>)
}