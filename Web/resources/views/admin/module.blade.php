@extends('adminlte::page')

@section('title', 'TOPPER')

@section('content_header')
    <h1>MODULE</h1>
@stop

@section('content')
	<form method="post" action="module/store" enctype="multipart/form-data">
		<input type="file" name="fModule">
		<button type="submit">Submit</button>
	</form>
@stop