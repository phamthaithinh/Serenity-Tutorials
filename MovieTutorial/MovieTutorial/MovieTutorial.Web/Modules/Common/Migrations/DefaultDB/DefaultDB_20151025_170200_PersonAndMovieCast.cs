using FluentMigrator;
using System;

namespace MovieTutorial.Migrations.DefaultDB
{
    [Migration(20151025170200)]
    public class DefaultDB_20151025_170200_PersonAndMovieCast : Migration
    {
        public override void Up()
        {
            Create.Table("Person").InSchema("mov")
                .WithColumn("PersonId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Firstname").AsString(50).NotNullable()
                .WithColumn("Lastname").AsString(50).NotNullable()
                .WithColumn("BirthDate").AsDateTime().Nullable()
                .WithColumn("BirthPlace").AsString(100).Nullable()
                .WithColumn("Gender").AsInt32().Nullable()
                .WithColumn("Height").AsInt32().Nullable();

            Create.Table("MovieCast").InSchema("mov")
                .WithColumn("MovieCastId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("MovieId").AsInt32().NotNullable()
                    .ForeignKey("FK_MovieCast_MovieId", "mov", "Movie", "MovieId")
                .WithColumn("PersonId").AsInt32().NotNullable()
                    .ForeignKey("FK_MovieCast_PersonId", "mov", "Person", "PersonId")
                .WithColumn("Character").AsString(50).Nullable();

            Insert.IntoTable("Person").InSchema("mov")
                .Row(new
                {
                    Firstname = "Keanu",
                    Lastname = "Reeves",
                    BirthDate = new DateTime(1964, 09, 02),
                    BirthPlace = "Beirut, Lebanon",
                    Gender = 1,
                    Height = 185
                });

            Insert.IntoTable("Person").InSchema("mov")
                .Row(new
                {
                    Firstname = "Laurence",
                    Lastname = "Fishburne",
                    BirthDate = new DateTime(1961, 07, 30),
                    BirthPlace = "Augusta, Georgia, USA",
                    Gender = 1,
                    Height = 184
                })
                .Row(new
                {
                    Firstname = "Carrie-Anne",
                    Lastname = "Moss",
                    BirthDate = new DateTime(1967, 08, 21),
                    BirthPlace = "Vancouver, British Columbia, Canada",
                    Gender = 2,
                    Height = 174
                });
        }

        public override void Down()
        {
        }
    }
}