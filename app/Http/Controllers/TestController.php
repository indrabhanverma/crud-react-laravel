<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\TestModel;
use DB;
use Auth;
class TestController extends Controller
{
 public function index(){
   $data = DB::table('table_tbl_test')->get();
  return view('test.list',compact('data'));
   }
public function create(Request $request){

     return view('test.create');
}
public function store(Request $request){
  
    $data = new TestModel;
    $data->test = $request->test;
    $data->save();
    return redirect('/list')->with('success','data added succesfully!');
    
}
public function edit(Request $request, $id){
  $data = DB::table('table_tbl_test')->where('id',$id)->first();
  return view('test.edit',compact('data'));
}
public function update(Request $request, $id){
  $data = TestModel::find($id);
  $data->test = $request->test;
  $data->update();
  return redirect('/list')->with('success','data updated succesfully!');
    
}
public function destroy($id){
 
  $employee = TestModel::find($id);
  $employee->delete();
  return redirect('/list')->with('success','deleted succesfully!');
}
}
