package com.invoiceprocessing.server.controller;

import com.invoiceprocessing.server.dto.IdDTO;
import com.invoiceprocessing.server.model.Invoice;
import com.invoiceprocessing.server.response.GeneralResponse;
import com.invoiceprocessing.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/add-invoice")
    public ResponseEntity<?> addInvoice(@RequestBody Invoice invoice) {
        Invoice inv = this.invoiceService.addInvoice(invoice);
        if(inv!=null)
            return ResponseEntity.ok(new GeneralResponse("Invoice added successfully", true));
        else
            return ResponseEntity.badRequest().body(new GeneralResponse("Failed to add invoice" , false));
    }

    @GetMapping("/get-invoices/{userId}")
    public List<Invoice> getInvoices(@PathVariable String userId) {
        return this.invoiceService.getInvoices(Integer.parseInt(userId));
    }

    @DeleteMapping("/delete-invoice")
    public ResponseEntity<?> deleteInvoice(@RequestBody IdDTO idDTO) {
        boolean res = this.invoiceService.deleteInvoice(idDTO.getId());
        if(res)
            return ResponseEntity.ok(new GeneralResponse("Invoice deleted successfully", true));
        else
            return ResponseEntity.badRequest().body(new GeneralResponse("Failed to delete invoice" , false));
    }
}
