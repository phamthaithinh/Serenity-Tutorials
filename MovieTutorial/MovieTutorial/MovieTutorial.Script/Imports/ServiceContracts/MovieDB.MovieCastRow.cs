
namespace MovieTutorial.MovieDB
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class MovieCastRow
    {
        [InlineConstant] public const string IdProperty = "MovieCastId";
        [InlineConstant] public const string NameProperty = "Character";
        [InlineConstant] public const string LocalTextPrefix = "MovieDB.MovieCast";
    
        public Int32? MovieCastId { get; set; }
        public Int32? MovieId { get; set; }
        public Int32? PersonId { get; set; }
        public String Character { get; set; }
        public String MovieTitle { get; set; }
        public String MovieDescription { get; set; }
        public String MovieStoryline { get; set; }
        public Int32? MovieYear { get; set; }
        public String MovieReleaseDate { get; set; }
        public Int32? MovieRuntime { get; set; }
        public Int32? MovieKind { get; set; }
        public Int32? MovieGenreId { get; set; }
        public String PersonFirstname { get; set; }
        public String PersonLastname { get; set; }
        public String PersonBirthDate { get; set; }
        public String PersonBirthPlace { get; set; }
        public Int32? PersonGender { get; set; }
        public Int32? PersonHeight { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string MovieCastId = "MovieCastId";
            [InlineConstant] public const string MovieId = "MovieId";
            [InlineConstant] public const string PersonId = "PersonId";
            [InlineConstant] public const string Character = "Character";
            [InlineConstant] public const string MovieTitle = "MovieTitle";
            [InlineConstant] public const string MovieDescription = "MovieDescription";
            [InlineConstant] public const string MovieStoryline = "MovieStoryline";
            [InlineConstant] public const string MovieYear = "MovieYear";
            [InlineConstant] public const string MovieReleaseDate = "MovieReleaseDate";
            [InlineConstant] public const string MovieRuntime = "MovieRuntime";
            [InlineConstant] public const string MovieKind = "MovieKind";
            [InlineConstant] public const string MovieGenreId = "MovieGenreId";
            [InlineConstant] public const string PersonFirstname = "PersonFirstname";
            [InlineConstant] public const string PersonLastname = "PersonLastname";
            [InlineConstant] public const string PersonBirthDate = "PersonBirthDate";
            [InlineConstant] public const string PersonBirthPlace = "PersonBirthPlace";
            [InlineConstant] public const string PersonGender = "PersonGender";
            [InlineConstant] public const string PersonHeight = "PersonHeight";
        }
    }
    
}

