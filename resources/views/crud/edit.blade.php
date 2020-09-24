<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ADMIN</title>
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
    />
    <script
      src="https://kit.fontawesome.com/f99e0cbd69.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <style>
        .container-edit {
            margin-top: 200px
        }
        .update {
            width: 1110px
        }
        @media (max-width: 1366px) and (max-height: 768px){
            .container-edit {
                margin-top: 100px
            }
            .row {
                margin-bottom: 200px;
            }
        }
    </style>
</head>
<body>
    @include('layouts.header')
    
    <div class="container container-edit">
    @if(session('success'))
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Succes!</strong> {{session('success')}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif
        <h1 style="font-weight: 700;">EDIT BREAKFAST MENU</h1>
        @if(session('success'))
        <div class="alert alert-success" role="alert">
            {{session('success')}}
        </div>
        @endif
        <div class="row">
            <div class="col-lg-12">
                <form action="/breakfastMenu/{{$breakfasts->id}}/update" method="POST">
                    {{csrf_field()}}
                    <div class="form-group">
                        <label for="exampleInputEmail1">URL</label>
                        <input name="url" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Isiskan Nama Lengkap" value="{{$breakfasts->url}}">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nama Menu</label>
                        <input name="nama" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Isiskan Tempat Lahir" value="{{$breakfasts->nama}}">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Description</label>
                        <input name="desc" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Isiskan NISN" value="{{$breakfasts->desc}}">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Harga</label>
                        <input name="harga" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Isiskan NISN" value="{{$breakfasts->harga}}">
                    </div>
        
                    <button type="submit" class="btn btn-warning text-light update">UPDATE</button>
                </form>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</html>