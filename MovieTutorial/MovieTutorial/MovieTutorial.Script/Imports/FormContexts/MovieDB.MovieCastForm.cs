
namespace MovieTutorial.MovieDB
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class MovieCastForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "MovieDB.MovieCast";
    
        public MovieCastForm(string idPrefix) : base(idPrefix) {}
    
        public LookupEditor PersonId { get { return ById<LookupEditor>("PersonId"); } }
        public StringEditor Character { get { return ById<StringEditor>("Character"); } }
    }
}

