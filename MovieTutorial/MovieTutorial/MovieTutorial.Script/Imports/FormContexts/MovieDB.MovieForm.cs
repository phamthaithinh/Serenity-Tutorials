
namespace MovieTutorial.MovieDB
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class MovieForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "MovieDB.Movie";
    
        public MovieForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Title { get { return ById<StringEditor>("Title"); } }
        public TextAreaEditor Description { get { return ById<TextAreaEditor>("Description"); } }
        public MovieCastEditor CastList { get { return ById<MovieCastEditor>("CastList"); } }
        public TextAreaEditor Storyline { get { return ById<TextAreaEditor>("Storyline"); } }
        public IntegerEditor Year { get { return ById<IntegerEditor>("Year"); } }
        public DateEditor ReleaseDate { get { return ById<DateEditor>("ReleaseDate"); } }
        public IntegerEditor Runtime { get { return ById<IntegerEditor>("Runtime"); } }
        public LookupEditor GenreId { get { return ById<LookupEditor>("GenreId"); } }
        public EnumEditor Kind { get { return ById<EnumEditor>("Kind"); } }
    }
}

