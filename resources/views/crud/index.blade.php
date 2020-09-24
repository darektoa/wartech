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
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
    />
    <style>
        .search input[type=search] {
            width: 1000px
        }
        .arrow-back{
            position: absolute;
            top: 8px;
        }
        @media (max-width: 1366px) and (max-height: 768px){
            .search {
                transform: scale(0.9);
            }
            .search input[type=search] {
                width: 500px;
            }
        }
    </style>
</head>
<body>

@include('layouts.header')

<div class="container-admin" style="margin: 100px">
    @if(session('success'))
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Succes!</strong> {{session('success')}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif

    <div class="row  animate__animated animate__backInDown">
        
        <div class="col col-6 font-weight-bold text-left">
            <a class="arrow-back" href="/admin"><img src="{{asset('assets/img/arrow-back.svg')}}" alt="arrow back"></a>
            <h2 class="tittleTbl" style="font-weight: 700; margin-left: 50px;">BACK | BREAKFAST MENU DATA</h2>
        </div>

        <div class="col col-6 align-self-center mb-5">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-warning btn-bg float-right text-light" data-toggle="modal" data-target="#exampleModal">ADD SOMETHING TO THE CART</button>
        </div>

        {{-- Search Input --}}
        <form action="/cartItem" method="GET" class="search form-inline mb-5" style="margin-left:300px">
            <input name="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
        </form>

        <table class="table table-hover table-striped">
            <thead>
                <tr class="bg-warning text-light">
                    <th>URL</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                    <th style="padding-left: 50px; padding-right: 50px; text-align: left;">ACTION</th>
                </tr>
            </thead>

            @foreach ($breakfasts as $data)
            <tr>
                <td>{{$data->url}}</td>
                <td>{{$data->nama}}</td>
                <td>{{$data->desc}}</td>
                <td>{{$data->harga}}</td>
                <td>
                    <a href="/breakfastMenu/{{$data->id}}/edit" class="btn btn-warning btn-sm text-light">EDIT</a>
                    <a href="/breakfastMenu/{{$data->id}}/delete" class="btn btn-danger btn-sm" onclick="return confirm('Are You Sure Want Delete This Item')">DELETE</a>
                </td>
            </tr>
            @endforeach

        </table>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content text-light"  style="background: linear-gradient(236.74deg, #FFD600 11.83%, #FFC700 54.83%);">
            <div class="modal-header" style="border-bottom: 2px solid white;">
                <h5 class="modal-title" id="exampleModalLabel">ADD SOMETHING TO BREAKFAST</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                {{-- Popup Forms --}}
                <form action="/breakfastMenu/create" method="POST">
                    {{csrf_field()}}
                    <div class="form-group">
                        <label for="exampleInputEmail1">URL</label>
                        <input style="border:none" name="url" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your image url" value="assets/">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nama Menu</label>
                        <input style="border:none" name="nama" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your menu name">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Description</label>
                        <input style="border:none" name="desc" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your menu description">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Price</label>
                        <input style="border:none" name="harga" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your menu price">
                    </div>
                </div>
                <div class="modal-footer" style="border-top: 2px solid white;">
                    <button type="button" class="btn btn-danger text-light" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary text-light">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</html>

