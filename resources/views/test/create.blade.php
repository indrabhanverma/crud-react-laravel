<form method="post" action="{{url('store')}}">
    @csrf
    <input type="text" name="test">
     <button type="submit">submit</button>

</form>