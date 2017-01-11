@extends('adminlte::page')

@section('title', 'TOPPER')

@section('content_header')
    <h1>MODULE</h1>
@stop

@section('css')
@stop

@section('js')
@stop

@section('content')
	<!-- <form method="post" action="module/upload" enctype="multipart/form-data">
		<input type="file" name="fModule">
		<button type="submit">Submit</button>
	</form> -->

	<table class="datatable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Created at</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>

  <script>
    $(document).ready(function(){
      $('.datatable').DataTable({
            processing: true,
            serverSide: true,
            ajax: '{{ route("datatables/module") }}'
        });
    });
  </script>
@stop