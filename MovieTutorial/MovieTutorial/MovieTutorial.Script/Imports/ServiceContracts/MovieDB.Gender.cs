
namespace MovieTutorial.MovieDB
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [EnumKey("MovieDB.Gender"), PreserveMemberCase]
    public enum Gender
    {
        Male = 1,
        Female = 2
    }
    
}

