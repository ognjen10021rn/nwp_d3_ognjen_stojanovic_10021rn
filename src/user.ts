export interface User {
  userId: number,
  username: string,
  can_read_users: boolean,
  can_create_users: boolean,
  can_update_users: boolean,
  can_delete_users: boolean,
  can_add_vacuum: boolean,
  can_remove_vacuum: boolean,
  can_start_vacuum: boolean,
  can_discharge_vacuum: boolean,
  can_search_vacuum: boolean,
  can_stop_vacuum: boolean
}

export interface Jwt {
  jwt: string
}
/*
*     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToOne
    private User user;

    @Column
    private boolean active;

    @Column
    private boolean isBlocked;

    @Column
    private int cycleNumber;

    @Version
    private int version;

    @Column
    @JsonFormat(pattern = "dd.MM.yyyy HH:mm")
    private LocalDate dateCreated;

* */
export interface Vacuum {
  id: number,
  name: string,
  user: number,
  status: string,
  active: boolean,
  isBlocked: boolean,
  cycleNumber: number,
  dateCreated: string
}
export interface ErrorDto {
  id: number,
  message: string,
  date: string,
  vacuum: Vacuum,
}
