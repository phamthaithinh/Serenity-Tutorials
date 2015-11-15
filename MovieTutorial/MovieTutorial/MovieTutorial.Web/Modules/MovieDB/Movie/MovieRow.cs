
namespace MovieTutorial.MovieDB.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Movies"), InstanceName("Movie"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class MovieRow : Row, IIdRow, INameRow
    {
        [DisplayName("Movie Id"), Identity]
        public Int32? MovieId
        {
            get { return Fields.MovieId[this]; }
            set { Fields.MovieId[this] = value; }
        }

        [DisplayName("Title"), Size(200), NotNull]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Description"), Size(1000), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Storyline"), QuickSearch]
        public String Storyline
        {
            get { return Fields.Storyline[this]; }
            set { Fields.Storyline[this] = value; }
        }

        [DisplayName("Year"), QuickSearch(SearchType.Equals, numericOnly: 1)]
        public Int32? Year
        {
            get { return Fields.Year[this]; }
            set { Fields.Year[this] = value; }
        }

        [DisplayName("Release Date")]
        public DateTime? ReleaseDate
        {
            get { return Fields.ReleaseDate[this]; }
            set { Fields.ReleaseDate[this] = value; }
        }

        [DisplayName("Runtime (mins)")]
        public Int32? Runtime
        {
            get { return Fields.Runtime[this]; }
            set { Fields.Runtime[this] = value; }
        }

        [DisplayName("Kind"), NotNull, DefaultValue(1)]
        public MovieKind? Kind
        {
            get { return (MovieKind?)Fields.Kind[this]; }
            set { Fields.Kind[this] = (Int32?)value; }
        }

        [DisplayName("Genre"), ForeignKey("[mov].Genre", "GenreId"), LeftJoin("g")]
        [LookupEditor("MovieDB.Genre", InplaceAdd = true)]
        public Int32? GenreId
        {
            get { return Fields.GenreId[this]; }
            set { Fields.GenreId[this] = value; }
        }

        [DisplayName("Genre"), Expression("g.Name")]
        public String GenreName
        {
            get { return Fields.GenreName[this]; }
            set { Fields.GenreName[this] = value; }
        }

        [DisplayName("Cast List"), MasterDetailRelation(foreignKey: "MovieId"), ClientSide]
        public List<MovieCastRow> CastList
        {
            get { return Fields.CastList[this]; }
            set { Fields.CastList[this] = value; }
        }

        [DisplayName("Primary Image"), Size(100), ImageUploadEditor(FilenameFormat = "Movie/PrimaryImage/~")]
        public string PrimaryImage
        {
            get { return Fields.PrimaryImage[this]; }
            set { Fields.PrimaryImage[this] = value; }
        }

        [DisplayName("Gallery Images"), MultipleImageUploadEditor(FilenameFormat = "Movie/GalleryImages/~")]
        public string GalleryImages
        {
            get { return Fields.GalleryImages[this]; }
            set { Fields.GalleryImages[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MovieId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MovieRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field MovieId;
            public readonly StringField Title;
            public readonly StringField Description;
            public readonly StringField Storyline;
            public readonly Int32Field Year;
            public readonly DateTimeField ReleaseDate;
            public readonly Int32Field Runtime;
            public readonly Int32Field Kind;
            public readonly Int32Field GenreId;
            public readonly StringField GenreName;
            public readonly StringField PrimaryImage;
            public readonly StringField GalleryImages;

            public readonly RowListField<MovieCastRow> CastList;

            public RowFields()
                : base("[mov].Movie")
            {
                LocalTextPrefix = "MovieDB.Movie";
            }
        }
    }
}