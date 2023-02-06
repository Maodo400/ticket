package sn.esp.ticket.domain;

import java.io.Serializable;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import sn.esp.ticket.domain.enumeration.EnumEtat;

/**
 * A Ticket.
 */
@Entity
@Table(name = "ticket")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Ticket implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "etat")
    private EnumEtat etat;

    @Column(name = "email")
    private String email;

    @Column(name = "demande")
    private String demande;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Ticket id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public EnumEtat getEtat() {
        return this.etat;
    }

    public Ticket etat(EnumEtat etat) {
        this.setEtat(etat);
        return this;
    }

    public void setEtat(EnumEtat etat) {
        this.etat = etat;
    }

    public String getEmail() {
        return this.email;
    }

    public Ticket email(String email) {
        this.setEmail(email);
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDemande() {
        return this.demande;
    }

    public Ticket demande(String demande) {
        this.setDemande(demande);
        return this;
    }

    public void setDemande(String demande) {
        this.demande = demande;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Ticket)) {
            return false;
        }
        return id != null && id.equals(((Ticket) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Ticket{" +
            "id=" + getId() +
            ", etat='" + getEtat() + "'" +
            ", email='" + getEmail() + "'" +
            ", demande='" + getDemande() + "'" +
            "}";
    }
}
