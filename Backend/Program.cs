using Backend.Data;

var builder = WebApplication.CreateBuilder(args);

//Services
builder.Services.AddControllers();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ApplicationDbContext>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();



app.Run();
