

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Northwind/EmployeeTerritory", url: "~/Northwind/EmployeeTerritory", permission: "Northwind")]

namespace MovieTutorial.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/EmployeeTerritory"), Route("{action=index}")]
    public class EmployeeTerritoryController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/EmployeeTerritory/EmployeeTerritoryIndex.cshtml");
        }
    }
}