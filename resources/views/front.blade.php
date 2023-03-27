
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Home Page</title>
        <link href="{{ asset('layout/styles/layout.css')}}" rel="stylesheet" type="text/css" media="all">
    </head>
    <body>
        <div id="front"></div>
        <script src="{{ asset('layout/scripts/jquery.min.js') }}"></script>
     
        <script src="{{ asset('layout/scripts/jquery.backtotop.js')}}"></script>
        <script src="{{ asset('layout/scripts/jquery.mobilemenu.js')}}"></script>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>