<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Food;

class FoodControllerAdmin extends Controller
{
    public function index(Request $request) 
    {
        if ($request->has('search')) {
            $foods = Food::where('nama', 'LIKE', '%'.$request->search.'%')->get();    
        } else {
            $foods = Food::all();
        }

        return view('foodAdmin.index', ['foods'=>$foods]);
    }

    public function create(Request $request)
    {
        $foods = Food::create([
            "nama" => $request->nama,
            "desc" => $request->desc,
            "price" => $request->price,
            "icon" => $request->icon,
        ]);

        return redirect('/foodItem')->with('success', 'Your Data Has Been Inputed');
    }

    public function edit($id) 
    {
        $foods = Food::find($id);
        return view('foodAdmin/edit', ['foods'=>$foods]);
    }

    public function update(Request $request, $id) 
    {
        $foods = Food::where('id',$id)->update([
            "nama" => $request->nama,
            "desc" => $request->desc,
            "price" => $request->price,
            "icon" => $request->icon,
        ]);

        return redirect('/foodItem')->with('success', 'Your Data Has Been Updated');
    }

    public function delete($id) {
        $foods = Food::find($id);
        $foods->delete();

        return redirect('/foodItem')->with('success', 'Your Data Has Been Deleted');
    }
}
