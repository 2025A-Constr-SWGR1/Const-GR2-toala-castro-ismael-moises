package com.PoliCampus.controladores;

import com.PoliCampus.modelo.Ruta;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import persistencia.RutaJpaController;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

import java.util.List;

@WebServlet("/buses")
public class RutaController extends HttpServlet {

    private final RutaJpaController controladoraPersistencia;
    private static final String RUTA_JSP = "polibus.jsp";
    private static final String ERROR_CONSULTA = "Error en la consulta: ";

    // Constructor
    public RutaController() {
        this(new RutaJpaController());
    }

    public RutaController(RutaJpaController controladoraPersistencia) {
        // Asigna la instancia del controlador de persistencia proporcionada al atributo de la clase
        this.controladoraPersistencia = controladoraPersistencia;
    }


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            List<Ruta> rutas = obtenerRutas();
            pasarAtributosYDespachar(request, response, rutas);
        } catch (Exception e) {
            manejarError(response, e);
        }
    }


    void manejarError(HttpServletResponse response, Exception e) throws IOException {
        String errorMessage = "Error en la consulta: " + e.getMessage();
        response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error en la consulta");

        // Guardar el error en un archivo
        guardarErrorEnArchivo(errorMessage);
    }

    private void guardarErrorEnArchivo(String errorMessage) {
        String rutaArchivo = obtenerRutaArchivoErrores();

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(rutaArchivo, true))) {
            writer.write(errorMessage);
            writer.newLine();
        } catch (IOException ioException) {
            ioException.printStackTrace();
        }
    }

    private String obtenerRutaArchivoErrores() {
        return "errores.txt";
    }

    private List<Ruta> obtenerRutas() throws Exception {
        return controladoraPersistencia.obtenerTodasLasRutas();
    }

    void pasarAtributosYDespachar(HttpServletRequest request, HttpServletResponse response, List<Ruta> rutas) throws ServletException, IOException {
        request.setAttribute("rutas", rutas);
        request.getRequestDispatcher(RUTA_JSP).forward(request, response);
    }

}