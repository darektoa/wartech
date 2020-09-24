<!DOCTYPE html>

<html lang="id">
    <head>
        <title>Wartech</title>
        <meta charset="UTF-8">
        <meta name="theme-color" content="#000">
        <meta name="author" content="Abdul Fattah">
        <meta name="description" content="Wartech is modern food ordering on the world">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="{{ asset('assets/img/wartech/icon.png') }}">
        @include('layouts/link-css')
    </head>

    <body>
        <elmnt-header></elmnt-header>
        <slide-box></slide-box>
        <elmnt-home></elmnt-home>
        <elmnt-footer></elmnt-footer>

        <script src="{{ asset('assets/js/main.js') }}" type="module"></script>
    </body>
</html>