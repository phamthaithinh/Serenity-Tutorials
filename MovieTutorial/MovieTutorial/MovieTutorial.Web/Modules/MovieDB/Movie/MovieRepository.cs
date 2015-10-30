
namespace MovieTutorial.MovieDB.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.MovieRow;

    public class MovieRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                base.AfterSave();

                if (Row.CastList != null)
                {
                    var mc = Entities.MovieCastRow.Fields;
                    var oldList = IsCreate ? null :
                        Connection.List<Entities.MovieCastRow>(mc.MovieId == this.Row.MovieId.Value);

                    new Common.DetailListSaveHandler<Entities.MovieCastRow>(oldList, Row.CastList,
                        x => x.MovieId = Row.MovieId.Value).Process(this.UnitOfWork);
                }
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                var mc = Entities.MovieCastRow.Fields;
                Row.CastList = Connection.List<Entities.MovieCastRow>(q => q
                    .SelectTableFields()
                    .Select(mc.PersonFullname));
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}