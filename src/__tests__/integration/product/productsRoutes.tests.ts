import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  mockedProduct,
  mockedAnotherProduct,
  mockedProductInvalid,
  mockedProductAlredyExist,
} from "../../mocks/product";

describe("Testing /PRODUTOS routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /produtos - Must be able tro create a product", async () => {
    const response = await request(app).post("/produtos").send(mockedProduct);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("produto");
    expect(response.body).toHaveProperty("valor");
    expect(response.body).toHaveProperty("descricao");
    expect(response.body).toHaveProperty("created");
    expect(response.body).toHaveProperty("updated");
    expect(response.status).toBe(201);
  });

  test("GET /produtos - Must be able to list all Products", async () => {
    const response = await request(app).get("/produtos");

    expect(response.body).toHaveLength(1)
    expect(response.status).toBe(200);
  });

  test("GET /produtos/find - Must be able to list by parameter", async () => {
    await request(app).post("/produtos").send(mockedProduct);
    const response = await request(app).get("/produtos/find?produto=Alexa");

    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("produto");
    expect(response.body[0]).toHaveProperty("valor");
    expect(response.body[0]).toHaveProperty("descricao");
    expect(response.body[0]).toHaveProperty("created");
    expect(response.body[0]).toHaveProperty("updated");
    expect(response.body[0].produto).toEqual("Alexa");
    expect(response.body[0].descricao).toEqual("Eletrônico");
    expect(response.body[0].valor).toEqual(300);
    expect(response.status).toBe(200);
  });

  test("GET /produtos/id - Must be able to list products by id", async () => {
    const Targetid = await request(app).post("/produtos").send(mockedAnotherProduct);
    const response = await request(app).get(`/produtos/${Targetid.body.id}`);
    
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("produto");
    expect(response.body).toHaveProperty("valor");
    expect(response.body).toHaveProperty("descricao");
    expect(response.body).toHaveProperty("created");
    expect(response.body).toHaveProperty("updated");
    expect(response.body.produto).toEqual("Radinho");
    expect(response.body.descricao).toEqual("Eletrônico");
    expect(response.body.valor).toEqual(30);
    expect(response.status).toBe(200);
  });
  
  test("PATCH /produtos/:id - Must be able to update a espesific dataProduct", async () => {
    const newValue = { valor: 1 }

    const Targetid = await request(app).get("/produtos")
    const response = await request(app).patch(`/produtos/${Targetid.body[0].id}`).send(newValue);
    
    expect(response.body.valor).toEqual(1)
    expect(response.status).toBe(200)
  })

  test("PUT /produtos/:id - Must be able to update a Product", async () => {
    const newValue = { produto: "CanecaTech", valor: 1, descricao: "Canecão"}

    const Targetid = await request(app).get("/produtos")
    const response = await request(app).put(`/produtos/${Targetid.body[0].id}`).send(newValue);
    
    expect(response.body.produto).toEqual("CanecaTech")
    expect(response.body.valor).toEqual(1)
    expect(response.body.descricao).toEqual("Canecão")
    expect(response.status).toBe(200)
  })

  test("DELETE /produtos/:id - Must be able to delete a Product", async () => {
    const TargetProduct = await request(app).get("/produtos");
    const response = await request(app).delete(`/produtos/${TargetProduct.body[0].id}`);

    expect(response.status).toBe(204)
  })

});
