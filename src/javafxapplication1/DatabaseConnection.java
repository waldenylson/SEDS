/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javafxapplication1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.swing.JOptionPane;

/**
 *
 * @author Waldenylson
 */
public class DatabaseConnection {
    
    protected Connection con;
    protected PreparedStatement ps;
    
    public void function(String DbFile)
    {
        try 
        {
            Class.forName("sun.jdbc.odbcJdbcOdbcDriver");
            this.con = DriverManager.getConnection("jbdc:odbc:"+DbFile);
        } catch (Exception e) 
        {
            JOptionPane.showMessageDialog(null, "Erro ao Acessar os dados de sondagem\n"+e.getMessage());
        }
    }
    
}
