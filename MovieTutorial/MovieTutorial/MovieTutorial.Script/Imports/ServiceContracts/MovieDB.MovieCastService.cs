namespace MovieTutorial.MovieDB
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class MovieCastService
    {
        [InlineConstant] public const string BaseUrl = "MovieDB/MovieCast";
    
        [InlineCode("Q.serviceRequest('MovieDB/MovieCast/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<MovieCastRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('MovieDB/MovieCast/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<MovieCastRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('MovieDB/MovieCast/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('MovieDB/MovieCast/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<MovieCastRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('MovieDB/MovieCast/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<MovieCastRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "MovieDB/MovieCast/Create";
            [InlineConstant] public const string Update = "MovieDB/MovieCast/Update";
            [InlineConstant] public const string Delete = "MovieDB/MovieCast/Delete";
            [InlineConstant] public const string Retrieve = "MovieDB/MovieCast/Retrieve";
            [InlineConstant] public const string List = "MovieDB/MovieCast/List";
        }
    }
    
}

