<h2>{{Auth::guard('admin')->user()->name}}</h2>

<table><thead> 
<tr><th>name</th>
<th>Action</th></tr>
</thead>
<tbody>
    @foreach($data  as $val)
  <tr>
  <td>{{$val->test}}</td>
  <td><a href="{{url('edit')}}/{{$val->id}}">edit</a><a href="{{url('delete')}}/{{$val->id}}">delete</a></td>
  </tr>
  @endforeach  
<tbody>
</table>