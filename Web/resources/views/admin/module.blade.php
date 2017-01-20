@extends('adminlte::page')

@section('title', 'TOPPER')

@section('content_header')
    <h1>MODULE</h1>
@stop

@section('css')
@stop

@section('content')
	<form method="post" action="module/upload" enctype="multipart/form-data">
		<input type="file" name="fModule">
		<button type="submit">Submit</button>
	</form>

    <div class="row">
        <div class="col-sm-12">
            <table class="datatable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
@stop

@section('js')
  <script>
    $(function() {
        $('.datatable').DataTable({
            processing: true,
            serverSide: true,
            ajax: {
                url: '{{ route("datatables.module") }}'
            },
            columns: [
                {data: 'name', name: 'name'},
                {data: 'price', name: 'price'},
                {data: 'created_at', name: 'created_at'},
                {data: 'updated_at', name: 'updated_at'}
            ]
        });
    });
  </script>
@stop
