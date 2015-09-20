using Serenity;
using System.Html;

namespace MovieTutorial
{
    public static class ScriptInitialization
    {
        static ScriptInitialization()
        {
            Q.Config.RootNamespaces.Add("MovieTutorial");
        }
    }
}