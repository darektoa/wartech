<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function insert(Request $req) {
        $gambar =  $req-> input('gambar');
        $judul =  $req-> input('judul');
        $desc =  $req-> input('desc');
        $date =  $req-> input('date');

        $data = array('gambar'=>$gambar, 'judul'=>$judul, 'desc'=>$desc, 'date'=>$date);

        DB::table('promositions')->insert($data);
    }
}
