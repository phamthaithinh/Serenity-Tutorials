

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Northwind/Employee", url: "~/Northwind/Employee", permission: "Northwind")]

namespace MovieTutorial.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Employee"), Route("{action=index}")]
    public class EmployeeController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Employee/EmployeeIndex.cshtml");
        }
    }
}