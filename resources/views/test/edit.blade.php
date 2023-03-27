<form method="post" action="{{url('update')}}/{{$data->id}} ">
    @csrf
    <input type="text" name="test" value="{{$data->test}}">
     <button type="submit">submit</button>

</form>